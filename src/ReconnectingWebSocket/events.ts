export class CloseEvent extends Event {
  public code: number;

  public reason: string;

  public wasClean = true;

  constructor(code = 1000, reason = '', target?: any) {
    super('close', target);
    this.code = code;
    this.reason = reason;
  }
}

export class ErrorEvent extends Event {
  public message: string;

  public error: Error;

  constructor(error: Error, target: any) {
    super('error', target);
    this.message = error.message;
    this.error = error;
  }
}

export type WebSocketEventValue = {
  close: CloseEvent;
  error: ErrorEvent;
  message: MessageEvent;
  open: Event;
};
