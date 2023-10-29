import React, { useEffect, useState } from "react";
import { createStore } from "../redux";

interface StoreState {
  count: number;
}

type IncrementAction = {
  type: "Increment";
};

type DecrementAction = {
  type: "Decrement";
};

type IncrementIfOddAction = {
  type: "IncrementIfOdd";
};

type IncrementAsync = {
  type: "IncrementAsync";
};

type StoreAction =
  | IncrementAction
  | DecrementAction
  | IncrementIfOddAction
  | IncrementAsync;

const initialState = {
  count: 0,
};

const reducer = (state: StoreState, action: StoreAction) => {
  switch (action.type) {
    case "Increment":
      return {
        count: (state.count += 1),
      };
    case "Decrement":
      return {
        count: (state.count -= 1),
      };
    case "IncrementIfOdd":
      if (state.count % 2 !== 0) {
        return reducer(state, { type: "Increment" });
      }
    default:
      return initialState;
  }
};

const store = createStore<StoreState, StoreAction>(reducer, initialState);

const ReduxCounterVanilla = () => {
  const [state, setState] = useState<StoreState>(initialState);

  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <div>
      <p>
        点击: <span id="value">{state.count}</span> 次数
        <button
          onClick={() => {
            store.dispatch({
              type: "Increment",
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "Decrement",
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "IncrementIfOdd",
            });
          }}
        >
          Increment if odd
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              store.dispatch({
                type: "Increment",
              });
            }, 300);
          }}
        >
          Increment async
        </button>
      </p>
    </div>
  );
};

export default ReduxCounterVanilla;
