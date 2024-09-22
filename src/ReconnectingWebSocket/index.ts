import type { WebSocketEventValue } from "./events";
import { CloseEvent, ErrorEvent } from "./events";

export type Message = string | ArrayBuffer | Blob | ArrayBufferView;

export type Options = {
  debug?: boolean;
  connectionTimeout?: number;
  maxRetries?: number;
  heartbeat?: {
    message?: Message | (() => Message);
    delay?: number;
    timeout?: number;
  };
};

const defaultOptions = {
  maxReconnectionDelay: 10000,
  minReconnectionDelay: 1000 + Math.random() * 4000,
  minUptime: 5000,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4000,
  maxRetries: Infinity,
  maxEnqueuedMessages: Infinity,
  debug: false,
};

export type Listener<T extends keyof WebSocketEventValue> = (
  value: WebSocketEventValue[T]
) => void;

export type ListenersMap = {
  [key in keyof WebSocketEventValue]: Set<Listener<key>>;
};

class ReconnectingWebSocket {
  private listeners: ListenersMap = {
    error: new Set(),
    message: new Set(),
    open: new Set(),
    close: new Set(),
  };

  private ws?: WebSocket;

  private _binaryType: BinaryType = "blob";

  private readonly _url: WebSocket["url"];

  private readonly _protocol?: WebSocket["protocol"];

  private messageQueue: Message[] = [];

  private connectTimeout: ReturnType<Window["setTimeout"]> | undefined;

  private uptimeTimeout: ReturnType<Window["setTimeout"]> | undefined;

  private heartbeatTimeout: ReturnType<Window["setTimeout"]> | undefined;

  private heartbeatInterval: ReturnType<Window["setInterval"]> | undefined;

  private _retryCount = -1;

  private shouldReconnect = true;

  private connectLock = false;

  private closeCalled = false;

  private readonly options: Options;

  constructor(
    url: WebSocket["url"],
    protocol?: WebSocket["protocol"],
    options: Options = {}
  ) {
    this._url = url;
    this._protocol = protocol;
    this.options = options;
    this.connect();
  }

  /**
   * 正在链接中
   */
  static get CONNECTING() {
    return 0;
  }

  /**
   * 已经链接并且可以通讯
   */
  static get OPEN() {
    return 1;
  }

  /**
   * 连接正在关闭
   */
  static get CLOSING() {
    return 2;
  }

  /**
   * 连接已关闭或者没有链接成功
   */
  static get CLOSED() {
    return 3;
  }

  /**
   * 正在链接中
   */
  get CONNECTING() {
    return ReconnectingWebSocket.CONNECTING;
  }

  /**
   * 已经链接并且可以通讯
   */
  get OPEN() {
    return ReconnectingWebSocket.OPEN;
  }

  /**
   * 连接正在关闭
   */
  get CLOSING() {
    return ReconnectingWebSocket.CLOSING;
  }

  /**
   * 连接已关闭或者没有链接成功
   */
  get CLOSED() {
    return ReconnectingWebSocket.CLOSED;
  }

  get binaryType() {
    return this.ws ? this.ws.binaryType : this._binaryType;
  }

  set binaryType(value: BinaryType) {
    this._binaryType = value;
    if (this.ws) {
      this.ws.binaryType = value;
    }
  }

  /**
   * Returns the number or connection retries
   */
  get retryCount(): number {
    return Math.max(this._retryCount, 0);
  }

  /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */
  get bufferedAmount(): number {
    const bytes = this.messageQueue.reduce((acc, message) => {
      if (typeof message === "string") {
        acc += message.length; // not byte size
      } else if (message instanceof Blob) {
        acc += message.size;
      } else {
        acc += message.byteLength;
      }
      return acc;
    }, 0);
    return bytes + (this.ws ? this.ws.bufferedAmount : 0);
  }

  /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */
  get extensions(): string {
    return this.ws ? this.ws.extensions : "";
  }

  /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */
  get protocol(): string {
    return this.ws ? this.ws.protocol : "";
  }

  /**
   * The current state of the connection; this is one of the Ready state constants
   */
  get readyState(): number {
    if (this.ws) {
      return this.ws.readyState;
    }
    return ReconnectingWebSocket.CONNECTING;
  }

  /**
   * The URL as resolved by the constructor
   */
  get url(): string {
    return this.ws ? this.ws.url : "";
  }

  /**
   * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
   */
  public onclose: ((event: CloseEvent) => void) | null = null;

  /**
   * An event listener to be called when an error occurs
   */
  public onerror: ((event: ErrorEvent) => void) | null = null;

  /**
   * An event listener to be called when a message is received from the server
   */
  public onmessage: ((event: MessageEvent) => void) | null = null;

  /**
   * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
   * this indicates that the connection is ready to send and receive data
   */
  public onopen: ((event: Event) => void) | null = null;

  /**
   *  关闭WebSocket连接 如果WebSocket已经是关闭状态 什么都不处理
   */
  public close(code = 1000, reason?: string) {
    this.shouldReconnect = false;
    this.closeCalled = true;
    this.clearTimeouts();

    if (!this.ws) {
      this.debug("close enqueued: no ws instance");
      return;
    }

    if (this.ws.readyState === this.CLOSED) {
      this.debug("close: already closed");
      return;
    }

    this.ws.close(code, reason);
  }

  /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */
  public reconnect(code?: number, reason?: string) {
    this.shouldReconnect = true;
    this.closeCalled = false;
    this._retryCount = -1;
    if (!this.ws || this.ws.readyState === this.CLOSED) {
      this.connect();
    } else {
      this.disconnect(code, reason);
      this.connect();
    }
  }

  /**
   * 将指定数据加入队列,连接WebSocket成功之后传输到服务器
   */
  public send(data: Message) {
    if (this.ws && this.ws.readyState === this.OPEN) {
      this.debug("send", data);
      this.ws.send(data);
    } else {
      this.debug("enqueue", data);
      this.messageQueue.push(data);
    }
  }

  /**
   * Register an event handler of a specific event type
   */
  public addEventListener<T extends keyof WebSocketEventValue>(
    type: T,
    listener: Listener<T>
  ): void {
    if (this.listeners[type]) {
      this.listeners[type].add(listener);
    }
  }

  public dispatchEvent<T extends keyof WebSocketEventValue>(
    type: T,
    value: WebSocketEventValue[T]
  ) {
    const listeners = this.listeners[type];
    if (listeners) {
      listeners.forEach((listener) => {
        listener(value);
      });
    }
  }

  /**
   *  Removes an event listener
   */
  public removeEventListener<T extends keyof WebSocketEventValue>(
    type: T,
    listener: Listener<T>
  ): void {
    if (this.listeners[type] && this.listeners[type].has(listener)) {
      this.listeners[type].delete(listener);
    }
  }

  private resetHeartbeat = () => {
    const { heartbeat = {} } = this.options;
    if (heartbeat.timeout) {
      clearTimeout(this.heartbeatTimeout);
      this.heartbeatTimeout = window.setTimeout(() => {
        this.debug("heartbeat timeout");
        this.reconnect();
      }, heartbeat.timeout);
    }
  };

  private heartbeat() {
    const { heartbeat = {} } = this.options;
    if (heartbeat.delay && heartbeat.message) {
      this.heartbeatInterval = window.setInterval(() => {
        const message =
          typeof heartbeat.message === "function"
            ? heartbeat.message()
            : heartbeat.message;
        this.debug("start heartbeat");
        this.send(message as Message);
      }, heartbeat.delay);
    }
  }

  private debug(...args: any[]) {
    if (this.options.debug) {
      console.log.apply(console, ["RWS>", ...args]);
    }
  }

  private getNextDelay() {
    const {
      reconnectionDelayGrowFactor,
      minReconnectionDelay,
      maxReconnectionDelay,
    } = defaultOptions;
    let delay = 0;
    if (this._retryCount > 0) {
      delay =
        minReconnectionDelay *
        Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
      if (delay > maxReconnectionDelay) {
        delay = maxReconnectionDelay;
      }
    }
    this.debug("next delay", delay);
    return delay;
  }

  private wait(time: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  private handleMessage = (event: MessageEvent) => {
    this.debug("message event", event);

    this.resetHeartbeat();

    if (this.onmessage) {
      this.onmessage(event);
    }

    this.dispatchEvent("message", event);
  };

  private connect = () => {
    if (this.connectLock || !this.shouldReconnect) {
      return;
    }
    this.connectLock = true;

    const {
      connectionTimeout = defaultOptions.connectionTimeout,
      maxRetries = defaultOptions.maxRetries,
    } = this.options;

    if (this._retryCount >= maxRetries) {
      this.debug("max retries reached", this._retryCount, ">=", maxRetries);
      return;
    }

    this._retryCount = this._retryCount + 1;

    this.debug("connect", this._retryCount);

    this.removeListener();

    this.wait(this.getNextDelay()).then(() => {
      if (this.closeCalled) {
        return;
      }

      this.debug("connect", { url: this._url, protocol: this._protocol });

      this.ws = new WebSocket(this._url, this._protocol);
      this.ws!.binaryType = this._binaryType;
      this.connectLock = false;

      this.addListeners();

      // 连接超时之后自动重连
      this.connectTimeout = window.setTimeout(() => {
        this.handleTimeout();
      }, connectionTimeout);
    });
  };

  private handleTimeout = () => {
    this.debug("timeout event");
    this.handleError(new ErrorEvent(new Error("TIMEOUT"), this));
  };

  private disconnect(code = 1000, reason?: string) {
    this.clearTimeouts();

    if (!this.ws) {
      return;
    }

    this.removeListener();

    try {
      this.ws.close();
      this.handleClose(new CloseEvent(code, reason, this));
    } catch {
      // do nothing
    }
  }

  private acceptOpen() {
    this.debug("accept open");
    this._retryCount = 0;
  }

  private handleOpen = (event: Event) => {
    if (!this.ws) {
      return;
    }

    this.debug("open event");

    this.uptimeTimeout = window.setTimeout(
      () => this.acceptOpen(),
      defaultOptions.minUptime
    );

    this.heartbeat();

    this.resetHeartbeat();

    // 连接成功之后取消定时器
    clearTimeout(this.connectTimeout);

    this.ws.binaryType = this._binaryType;

    if (this.messageQueue.length > 0) {
      // send enqueued messages (messages sent before websocket open event)
      this.messageQueue.forEach((message) => this.ws?.send(message));
      this.messageQueue = [];
    }

    if (this.onopen) {
      this.onopen(event);
    }

    this.dispatchEvent("open", event);
  };

  private handleError = (event: ErrorEvent) => {
    this.debug("error event", event.message);
    this.disconnect(
      undefined,
      event.message === "TIMEOUT" ? "timeout" : undefined
    );

    if (this.onerror) {
      this.onerror(event);
    }

    this.debug("exec error listeners");
    this.dispatchEvent("error", event);

    this.connect();
  };

  private handleClose = (event: CloseEvent) => {
    this.debug("close event");
    this.clearTimeouts();

    if (this.shouldReconnect) {
      this.connect();
    }

    if (this.onclose) {
      this.onclose(event);
    }

    this.dispatchEvent("close", event);
  };

  private addListeners = () => {
    if (!this.ws) {
      return;
    }
    this.debug("addEventListener");
    this.ws.addEventListener("open", this.handleOpen);
    this.ws.addEventListener("message", this.handleMessage);
    this.ws.addEventListener("close", this.handleClose);
    // @ts-ignore
    this.ws.addEventListener("error", this.handleError);
  };

  private removeListener = () => {
    if (!this.ws) {
      return;
    }
    this.debug("removeEventListener");
    this.ws.removeEventListener("open", this.handleOpen);
    this.ws.removeEventListener("message", this.handleMessage);
    this.ws.removeEventListener("close", this.handleClose);
    // @ts-ignore
    this.ws.removeEventListener("error", this.handleError);
  };

  private clearTimeouts() {
    clearTimeout(this.connectTimeout);
    clearTimeout(this.uptimeTimeout);
    clearInterval(this.heartbeatInterval);
    clearTimeout(this.heartbeatTimeout);
  }
}

export default ReconnectingWebSocket;
