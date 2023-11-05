import { Action } from "./types/actions";
import { Reducer, StateFromReducersMapObject } from "./types/reducer";
import ActionTypes from "./utils/actionTypes";
import isPlainObject from "./utils/isPlainObject";
import { kindOf } from "./utils/kindof";

function getUnexpectedStateShapeWarningMessage(
  inputState: object,
  reducers: { [key: string]: Reducer<any, any, any> },
  action: Action
) {
  if (action && action.type === ActionTypes.REPLACE) return;

  const reducerKeys = Object.keys(reducers);
  const argumentName =
    action && action.type === ActionTypes.INIT
      ? "preloadedState argument passed to createStore"
      : "previous state received by the reducer";

  if (reducerKeys.length === 0) {
    return (
      "Store does not have a valid reducer. Make sure the argument passed " +
      "to combineReducers is an object whose values are reducers."
    );
  }

  if (!isPlainObject(inputState)) {
    return (
      `The ${argumentName} has unexpected type of "${kindOf(
        inputState
      )}". Expected argument to be an object with the following ` +
      `keys: "${reducerKeys.join('", "')}"`
    );
  }

  const unexpectedKeys = Object.keys(inputState).filter(
    (key) => !reducers.hasOwnProperty(key)
  );

  if (unexpectedKeys.length > 0) {
    return (
      `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} ` +
      `"${unexpectedKeys.join('", "')}" found in ${argumentName}. ` +
      `Expected to find one of the known reducer keys instead: ` +
      `"${reducerKeys.join('", "')}". Unexpected keys will be ignored.`
    );
  }
}

function assertReducerShape(reducers: {
  [key: string]: Reducer<any, any, any>;
}) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === "undefined") {
      throw new Error(
        `The slice reducer for key "${key}" returned undefined during initialization. ` +
          `If the state passed to the reducer is undefined, you must ` +
          `explicitly return the initial state. The initial state may ` +
          `not be undefined. If you don't want to set a value for this reducer, ` +
          `you can use null instead of undefined.`
      );
    }

    if (
      typeof reducer(undefined, {
        type: ActionTypes.PROBE_UNKNOWN_ACTION(),
      }) === "undefined"
    ) {
      throw new Error(
        `The slice reducer for key "${key}" returned undefined when probed with a random type. ` +
          `Don't try to handle '${ActionTypes.INIT}' or other actions in "redux/*" ` +
          `namespace. They are considered private. Instead, you must return the ` +
          `current state for any unknown actions, unless it is undefined, ` +
          `in which case you must return the initial state, regardless of the ` +
          `action type. The initial state may not be undefined, but can be null.`
      );
    }
  });
}

const combineReducers = (reducers: {
  [key: string]: Reducer<any, any, any>;
}) => {
  /**
   * 过滤掉undefined类型key的reducer
   * 只保留reduces的值只等于function的数据
   */
  const reducerKeys = Object.keys(reducers);

  const finalReducers: { [key: string]: Reducer<any, any, any> } = {};

  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];

    if (process.env.NODE_ENV !== "production") {
      if (typeof reducers[key] === "undefined") {
        console.log(`No reducer provided for key "${key}"`);
      }
    }

    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }

  const finalReducerKeys = Object.keys(finalReducers);

  /**
   * 校验每个reducer返回值是否都有效
   * 不要处理redux内部的 Action 类型
   */
  let shapeAssertionError: unknown;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(
    state: StateFromReducersMapObject<typeof reducers>,
    action: Action
  ) {
    /**
     * 如果shapeAssertionError有错误信息 直接抛出异常
     */
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    /**
     * 判断reduce里面的Key和State里面的Key是否相同
     * 不相同则抛出异常
     */
    if (process.env.NODE_ENV !== "production") {
      const warningMessage = getUnexpectedStateShapeWarningMessage(
        state,
        finalReducers,
        action
      );
      if (warningMessage) {
        console.warn(warningMessage);
      }
    }

    /**
     * 依次执行对象里面每个reduce函数
     * 如果 reduce 函数返回值是 'undefined' 抛出错误
     * 把每个reduce执行的结果放到一个新对象里面 和上一个结果进行比较 判读是否修改过
     * 如果修改过返回新对象 没有修改返回上一次的对象
     */
    let hasChanged = false;
    const nextState: StateFromReducersMapObject<typeof reducers> = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error(
          `When called with an action of type ${
            actionType ? `"${String(actionType)}"` : "(unknown type)"
          }, the slice reducer for key "${key}" returned undefined. ` +
            `To ignore an action, you must explicitly return the previous state. ` +
            `If you want this reducer to hold no value, you can return null instead of undefined.`
        );
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
};

export default combineReducers;
