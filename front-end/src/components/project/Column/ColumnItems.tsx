import { Draggable } from 'react-beautiful-dnd';
import { Card } from '@/components/project/Card';
import { IColumnItemsProps } from './interfaces';

export function ColumnItems({ title, id, index, ...props }: IColumnItemsProps) {
  return (
    <Draggable key={title} draggableId={id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card title={title} {...props} />
        </li>
      )}
    </Draggable>
  );
}
