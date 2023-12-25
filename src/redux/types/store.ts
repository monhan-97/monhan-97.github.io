import { Action, UnknownAction } from "./actions";
import { Reducer } from "./reducer";

export interface Dispatch<A extends Action = UnknownAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T;
}

/**
 * 取消store的订阅
 */
export interface Unsubscribe {
  (): void;
}

/**
 * 订阅监听回调函数
 */
export type ListenerCallback = () => void;

export interface Store<S = any, A extends Action = UnknownAction> {
  dispatch: Dispatch<A>;
  getState(): S;
  subscribe(listener: ListenerCallback): Unsubscribe;
  replaceReducer(nextReducer: Reducer<S, A>): void;
}

export type StoreEnhancerStoreCreator<Ext extends {} = {}> = <
  S,
  A extends Action,
  PreloadedState
>(
  reducer: Reducer<S, A, PreloadedState>,
  preloadedState?: PreloadedState | undefined
) => Store<S, A> & Ext;

export type StoreEnhancer<Ext extends {} = {}> = <NextExt extends {}>(
  next: StoreEnhancerStoreCreator<NextExt>
) => StoreEnhancerStoreCreator<NextExt & Ext>;
