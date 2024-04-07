import { DragDropContext } from 'react-beautiful-dnd';
import { IColumnRootProps } from './interfaces';

export function ColumnRoot({ children, onDragEnd }: IColumnRootProps) {
  return (
    <section className='flex w-full'>
      <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
    </section>
  );
}
