import { Action } from "./types/actions";
import { Reducer } from "./types/reducer";
import {
  Store,
  ListenerCallback,
  Dispatch,
  StoreEnhancer,
} from "./types/store";
import { kindOf } from "./utils/kindof";
import isPlainObject from "./utils/isPlainObject";
import actionTypes from "./utils/actionTypes";

export function createStore<S, A extends Action, PreloadedState = S>(
  reducer: Reducer<S, A, PreloadedState>,
  preloadedState?: PreloadedState | undefined,
  enhancer?: StoreEnhancer
): Store<S, A> {
  if (typeof reducer !== "function") {
    throw new Error(
      `Expected the root reducer to be a function. Instead, received: '${kindOf(
        reducer
      )}'`
    );
  }

  if (
    (typeof preloadedState === "function" && typeof enhancer === "function") ||
    (typeof enhancer === "function" && typeof arguments[3] === "function")
  ) {
    throw new Error(
      "It looks like you are passing several store enhancers to " +
        "createStore(). This is not supported. Instead, compose them " +
        "together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example."
    );
  }

  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(
        `Expected the enhancer to be a function. Instead, received: '${kindOf(
          enhancer
        )}'`
      );
    }

    return enhancer(createStore)(
      reducer,
      preloadedState as PreloadedState | undefined
    );
  }

  /**
   * 当前的Reducer
   */
  let currentReducer = reducer;
  /**
   * 当前的State
   */
  let currentState: S | PreloadedState | undefined = preloadedState as
    | PreloadedState
    | undefined;
  /**
   * 存储更新函数的数组
   */
  let currentListeners: Map<number, ListenerCallback> = new Map();
  /**
   * 下次dispatch将会触发的更新函数数组
   */
  let nextListeners = currentListeners;
  /**
   * 监听的id计数
   */
  let listenerIdCounter = 0;
  /**
   * Dispatch是否执行完成
   */
  let isDispatching = false;

  /**
   * 读取当前store里面的数据
   *
   * @returns The current state tree of your application.
   */
  function getState(): S {
    if (isDispatching) {
      throw new Error(
        "You may not call store.getState() while the reducer is executing. " +
          "The reducer has already received the state as an argument. " +
          "Pass it down from the top reducer instead of reading it from the store."
      );
    }

    return currentState as S;
  }

  /**
   * 这个可以防止 dispatch执行的过程中 调用subscribe/unsubscribe  出现的任何bug
   */
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  /**
   * 分发一个 action 这是触发状态状态的唯一方法
   * @param action
   * @returns action
   */
  function dispatch(action: A) {
    if (!isPlainObject(action)) {
      throw new Error(
        `Actions must be plain objects. Instead, the actual type was: '${kindOf(
          action
        )}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`
      );
    }

    if (typeof action.type === "undefined") {
      throw new Error(
        'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.'
      );
    }

    if (typeof action.type !== "string") {
      throw new Error(
        `Action "type" property must be a string. Instead, the actual type was: '${kindOf(
          action.type
        )}'. Value was: '${action.type}' (stringified)`
      );
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    const listeners = (currentListeners = nextListeners);

    listeners.forEach((listener) => {
      listener();
    });

    return action;
  }

  function replaceReducer(nextReducer: Reducer<S, A>): void {
    if (typeof nextReducer !== "function") {
      throw new Error(
        `Expected the nextReducer to be a function. Instead, received: '${kindOf(
          nextReducer
        )}`
      );
    }

    currentReducer = nextReducer as unknown as Reducer<S, A, PreloadedState>;

    dispatch({
      type: actionTypes.REPLACE,
    } as A);
  }

  /**
   * 订阅状态的变更
   * @returns unsubscribe
   */
  function subscribe(listener: ListenerCallback) {
    if (typeof listener !== "function") {
      throw new Error(
        `Expected the listener to be a function. Instead, received: '${kindOf(
          listener
        )}'`
      );
    }

    if (isDispatching) {
      throw new Error(
        "You may not call store.subscribe() while the reducer is executing. " +
          "If you would like to be notified after the store has been updated, subscribe from a " +
          "component and invoke store.getState() in the callback to access the latest state. " +
          "See https://redux.js.org/api/store#subscribelistener for more details."
      );
    }

    /**
     * 标记是否订阅完成
     */
    let isSubscribed = true;

    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error(
          "You may not unsubscribe from a store listener while the reducer is executing. " +
            "See https://redux.js.org/api/store#subscribelistener for more details."
        );
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }

  /**
   * 当store创建完毕的时候 dispatch INIT Action
   * 使每个reduce返回初始值 可以填充初始状态
   */
  dispatch({ type: actionTypes.INIT } as A);

  return {
    getState,
    dispatch: dispatch as Dispatch<A>,
    replaceReducer,
    subscribe,
  };
}
