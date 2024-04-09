import { Droppable } from 'react-beautiful-dnd';
import { IColumnAreaProps } from './interfaces';
import { Typography } from '@/components/project/Typography';
import { Column } from '.';
import { ColorPickerModal } from '../ColorPickerModal';

export function ColumnArea({
  id,
  title,
  index,
  tasks,
  color,
}: IColumnAreaProps) {
  return (
    <Droppable droppableId={id} key={index}>
      {(provided) => (
        <div>
          <div className='flex items-center gap-2'>
            <ColorPickerModal />
            <Typography as='h3'>{title.toUpperCase()}</Typography>
          </div>

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
