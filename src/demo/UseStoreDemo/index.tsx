import React, { useMemo, useState } from "react";
import { dispatch, useStore } from "./useStore";
import { ActionType } from "./types";

const A: React.FC = () => {
  const state = useStore();
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
      <span style={{ marginRight: 8 }}>数字A</span>
      <input
        type="number"
        value={state.numberA ?? ""}
        style={{ flex: 1 }}
        onChange={(e) => {
          dispatch({
            type: ActionType.UPDATE_NUMBER_A,
            value: Number(e.target.value),
          });
        }}
      ></input>
    </div>
  );
};

const B: React.FC = () => {
  const state = useStore();
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
      <span style={{ marginRight: 8 }}>数字B</span>
      <input
        style={{ flex: 1 }}
        value={state.numberB ?? ""}
        type="number"
        onChange={(e) => {
          dispatch({
            type: ActionType.UPDATE_NUMBER_B,
            value: Number(e.target.value),
          });
        }}
      ></input>
    </div>
  );
};

const Page = () => {
  const state = useStore();
  const [isSubmit, setSubmit] = useState(false);

  const sum = useMemo(() => {
    if (
      typeof state.numberA === "number" &&
      typeof state.numberB === "number"
    ) {
      return state.numberA + state.numberB;
    }
    return "类型错误";
  }, [state.numberA, state.numberB]);

  return (
    <div style={{ width: 250 }}>
      <A />
      <B />

      <div
        style={{
          display: "flex",
          marginLeft: 50,
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => {
            setSubmit(true);
          }}
        >
          提交
        </button>
        <button
          onClick={() => {
            dispatch({
              type: ActionType.RESET_NUMBER,
            });
            setSubmit(false);
          }}
        >
          重置
        </button>
      </div>

      {isSubmit && (
        <div style={{ marginLeft: 50, marginBottom: 16 }}>
          数字求和:
          {sum}
        </div>
      )}
    </div>
  );
};

export default Page;
