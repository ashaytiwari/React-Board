export interface IBoardState {
  taskList: Array<ITaskItem>;
  columnList: Array<IColumnItem>;
  columnOrder: Array<string>;
}

export interface ITaskItem {
  taskId: number;
  content: string;
}

export interface IColumnItem {
  columnId: string;
  title: string;
  taskIds: Array<number>;
}
