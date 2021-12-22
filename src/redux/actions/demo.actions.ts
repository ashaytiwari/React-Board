import { Dispatch } from "redux";
import { ADD_ITEM } from "../constants/demo";

export const addItems =
  (data: Array<string>) => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: ADD_ITEM,
      payload: data
    });
  };
