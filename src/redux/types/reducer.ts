import { Action, UnknownAction } from "./actions";

export type Reducer<
  S = any,
  A extends Action = UnknownAction,
  PreloadedState = S
> = (state: S | PreloadedState | undefined, action: A) => S;
