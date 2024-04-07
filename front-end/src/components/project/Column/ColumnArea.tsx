import { Droppable } from 'react-beautiful-dnd';
import { IColumnAreaProps } from './interfaces';
import { Typography } from '@/components/project/Typography';
import { Column } from '.';

export function ColumnArea({ id, title, index, tasks }: IColumnAreaProps) {
  return (
    <Droppable droppableId={id} key={index}>
      {(provided) => (
        <div>
          <Typography as='h3'>{title.toUpperCase()}</Typography>

          <ul
            className={`${id} flex flex-col gap-10 h-screen`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks &&
              tasks.map((item, index) => (
                <Column.Items {...item} index={index} />
              ))}
          </ul>
        </div>
      )}
    </Droppable>
  );
}
