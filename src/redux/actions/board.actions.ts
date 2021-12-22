import { Dispatch } from "redux";
import {
  ADD_UPDATE_COLUMN_LIST,
  UPDATE_COLUMN_ORDERS
} from "../constants/board";
import { IColumnItem } from "../types/board";

export const updateColumnOrders =
  (data: Array<string>) => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: UPDATE_COLUMN_ORDERS,
      payload: data
    });
  };

export const updateColumnsList =
  (data: Array<IColumnItem>) => async (dispatch: Dispatch<any>) => {
    dispatch({
      type: ADD_UPDATE_COLUMN_LIST,
      payload: data
    });
  };
