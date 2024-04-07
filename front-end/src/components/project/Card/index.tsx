import { Typography } from '@/components/project/Typography';
import { ICardProps } from './interface';

export function Card({
  title,
  totalSubTasks,
  completedSubTasks,
  onClick,
}: ICardProps) {
  return (
    <div
      className='flex flex-col gap-1 rounded-md [&>h3]:hover:text-primary-purple [&>*]:text-start shadow-elevation-1 p-5 w-[280px] bg-white'
      onClick={onClick}
      role='button'
    >
      <Typography as='h3' color='black'>
        {title}
      </Typography>

      <Typography as='h4' size='xs'>
        {completedSubTasks} of {totalSubTasks} subtasks
      </Typography>
    </div>
  );
}
