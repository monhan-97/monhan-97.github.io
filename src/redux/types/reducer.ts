import { Action, UnknownAction } from "./actions";

export type Reducer<
  S = any,
  A extends Action = UnknownAction,
  PreloadedState = S
> = (state: S | PreloadedState | undefined, action: A) => S;

export type StateFromReducersMapObject<M> = M[keyof M] extends
  | Reducer<any, any, any>
  | undefined
  ? {
      [P in keyof M]: M[P] extends Reducer<infer S, any, any> ? S : never;
    }
  : never;
