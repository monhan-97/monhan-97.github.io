/*
 *  Actions 必须有一个`type` 字段 来表示动作的类型
 */
export type Action<T extends string = string> = {
  type: T;
};

/**
 * 接受任何其他属性的操作类型。
 */
export interface UnknownAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: unknown;
}

export interface ActionCreator<A, P extends any[] = any[]> {
  (...args: P): A;
}

/**
 * Object whose values are action creator functions.
 */
export interface ActionCreatorsMapObject<A = any, P extends any[] = any[]> {
  [key: string]: ActionCreator<A, P>;
}
