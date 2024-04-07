import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { IColumnsData } from '@/components/project/Column/interfaces';
import {
  reorderFunctionsBaseParams,
  reorderColumnsAndTasksParms,
} from './interfaces';

export function useDragAndDrop(data: IColumnsData[]) {
  const [columns, setColumns] = useState<IColumnsData[]>(data);

  const reorderTasks = ({
    sourceColumn,
    sourceIndex,
    destinationIndex,
  }: reorderFunctionsBaseParams) => {
    const [reorderedItem] = sourceColumn.tasks.splice(sourceIndex, 1);
    sourceColumn.tasks.splice(destinationIndex, 0, reorderedItem);

    setColumns((state) => [...state]);

    return null;
  };

  const reorderColumnsAndTasks = ({
    sourceColumn,
    destinationColumn,
    destinationIndex,
    sourceIndex,
  }: reorderColumnsAndTasksParms) => {
    const [reorderedItem] = sourceColumn.tasks.splice(sourceIndex, 1);
    destinationColumn.tasks.splice(destinationIndex, 0, reorderedItem);

    setColumns((state) => [...state]);

    return null;
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const sourceColumn = columns.find(
      (column) => column.id === source.droppableId
    );

    const destinationColumn = columns.find(
      (column) => column.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return null;

    const taskWasMovedInSameColumn = sourceColumn === destinationColumn;

    if (taskWasMovedInSameColumn) {
      reorderTasks({
        sourceColumn,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      });
    } else {
      reorderColumnsAndTasks({
        sourceColumn,
        destinationColumn,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      });
    }
  };

  return { columns, onDragEnd };
}
