export enum ActionType {
  /**
   *  更新数字A
   */
  UPDATE_NUMBER_A = "UPDATE_NUMBER_A",
  /**
   *  更新数字B
   */
  UPDATE_NUMBER_B = "UPDATE_NUMBER_B",
  /**
   *  重置状态
   */
  RESET_NUMBER = "RESET_NUMBER",
}

export type StoreAction =
  | {
      type: ActionType.UPDATE_NUMBER_A;
      value: number;
    }
  | {
      type: ActionType.UPDATE_NUMBER_B;
      value: number;
    }
  | {
      type: ActionType.RESET_NUMBER;
    };

export type StoreState = {
  numberA?: number;
  numberB?: number;
};
