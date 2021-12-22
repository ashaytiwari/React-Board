import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./BoardPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  extractColumnItem,
  extractTaskItem
} from "../../utils/commonFunctions";
import {
  updateColumnOrders,
  updateColumnsList
} from "../../redux/actions/board.actions";

const BoardPage = () => {
  const dispatch = useAppDispatch();

  const taskList = useAppSelector((state) => state.board.taskList);
  const columnList = useAppSelector((state) => state.board.columnList);
  const columnOrder = useAppSelector((state) => state.board.columnOrder);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;
    // console.log(destination, source, draggableId, type);
    //If there is no destination
    if (!destination) {
      return;
    }

    //If source and destination is the same
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //If you're dragging columns
    if (type === "column") {
      const newColumnOrder = [...columnOrder];
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      dispatch(updateColumnOrders(newColumnOrder));
      return;
    }

    //Anything below this happens if you're dragging tasks
    const start = extractColumnItem(source.droppableId, columnList);
    const finish = extractColumnItem(destination.droppableId, columnList);

    //If dropped inside the same column
    if (start === finish) {
      const newTaskIds = start?.taskIds;
      newTaskIds?.splice(source.index, 1);
      newTaskIds?.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const localArray = [...columnList];
      localArray.map((item, index) => {
        if (item.columnId === newColumn.columnId) {
          localArray[index] = newColumn;
        }
      });
      dispatch(updateColumnsList(localArray));
      return;
    }

    //If dropped in a different column
    const startTaskIds = start?.taskIds;
    startTaskIds?.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = finish?.taskIds;
    finishTaskIds?.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const localArray = [...columnList];
    localArray.map((item, index) => {
      if (item.columnId === newStart.columnId) {
        localArray[index] = newStart;
      }
      if (item.columnId === newFinish.columnId) {
        localArray[index] = newFinish;
      }
    });
  };

  return (
    <div className={styles.boardPage}>
      <Header />
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {columnOrder.map((item: string, index: number) => {
                  const column = extractColumnItem(item, columnList);
                  const tasks = extractTaskItem(column, taskList);
                  return <div key={index}></div>;
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default BoardPage;
