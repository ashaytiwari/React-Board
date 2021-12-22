import { ADD_ITEM } from "../constants/demo";
import { IActionType, IDemoState } from "../types/demo";

const initialState: IDemoState = {
  list: ["Java", "JS", "React"]
};

export default (state: IDemoState = initialState, actionType: any) => {
  switch (actionType.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: actionType.payload
      };
    default:
      return state;
  }
};
