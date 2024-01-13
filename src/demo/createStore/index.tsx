import { useEffect, useState } from "react";
import { createStore } from "../../redux";
import { Actions } from "./actions";
import reduces, { StoreState, initialState } from "./reducers";

const store = createStore<StoreState, Actions>(reduces, initialState);

const App = () => {
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

export default App;
