import { IColumnItem, ITaskItem } from "../redux/types/board";

export const extractColumnItem = (
  columnKey: string,
  columnData: Array<IColumnItem>
) => {
  for (let i = 0; i < columnData.length; i++) {
    if (columnData[i].columnId === columnKey) {
      return columnData[i];
    }
  }
};

export const extractTaskItem = (
  column: IColumnItem | undefined,
  tasksList: Array<ITaskItem>
) => {
  const taskList = column?.taskIds.map((item: number) => tasksList[item - 1]);
  return taskList;
};
