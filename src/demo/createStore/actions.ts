export type IncrementAction = {
  type: "Increment";
};

export type DecrementAction = {
  type: "Decrement";
};

export type IncrementIfOddAction = {
  type: "IncrementIfOdd";
};

export type IncrementAsync = {
  type: "IncrementAsync";
};

export type Actions =
  | IncrementAction
  | DecrementAction
  | IncrementIfOddAction
  | IncrementAsync;
