import { useState, useEffect } from "react";
import { StoreState, StoreAction, ActionType } from "./types";

const listeners: ((state: StoreState) => void)[] = [];

let memoryState: StoreState = {};

const reducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case ActionType.UPDATE_NUMBER_A:
      return {
        ...state,
        numberA: action.value,
      };
    case ActionType.UPDATE_NUMBER_B:
      return {
        ...state,
        numberB: action.value,
      };
    case ActionType.RESET_NUMBER:
      return {};
    default:
      return state;
  }
};

/**
 *
 * @param action
 */
export const dispatch = (action: StoreAction) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

/**
 *
 * @param State
 * @returns
 */
export const useStore = () => {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return state;
};

export default useStore;
