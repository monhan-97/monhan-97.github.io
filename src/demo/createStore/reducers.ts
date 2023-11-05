import { Actions } from "./actions";

export interface StoreState {
  count: number;
}

export const initialState: StoreState = {
  count: 0,
};

const reducer = (state: StoreState, action: Actions) => {
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

export default reducer;
