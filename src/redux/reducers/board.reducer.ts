import {
  ADD_UPDATE_COLUMN_LIST,
  UPDATE_COLUMN_ORDERS
} from "../constants/board";
import { IBoardState } from "../types/board";

const initialState: IBoardState = {
  taskList: [
    { taskId: 1, content: "Content for task 1" },
    { taskId: 2, content: "Content for task 2" },
    { taskId: 3, content: "Content for task 3" },
    { taskId: 4, content: "Content for task 4" }
  ],
  columnList: [
    {
      columnId: "column-1",
      title: "Todo",
      taskIds: [1]
    },
    {
      columnId: "column-2",
      title: "In-Progress",
      taskIds: [2, 3]
    },
    {
      columnId: "column-3",
      title: "Review",
      taskIds: []
    },
    {
      columnId: "column-4",
      title: "Completed",
      taskIds: [4]
    }
  ],
  columnOrder: ["column-1", "column-2", "column-3", "column-4"]
};

export default (state: IBoardState = initialState, actionType: any) => {
  switch (actionType.type) {
    case UPDATE_COLUMN_ORDERS:
      return {
        ...state,
        columnOrder: actionType.payload
      };
    case ADD_UPDATE_COLUMN_LIST:
      return {
        ...state,
        columnList: actionType.payload
      };
    default:
      return state;
  }
};
