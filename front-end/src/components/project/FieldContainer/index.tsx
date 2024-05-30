import { Typography } from '@/components/project/Typography';
import { IFieldContainerProps } from './interface';
import { cn } from '@/utils/cn';

export function FieldContainer({
  htmlFor,
  text,
  children,
  color = 'gray',
  className = '',
}: IFieldContainerProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Typography
        as='label'
        size='sm'
        color={color}
        className={cn('className', className)}
        {...(htmlFor && { htmlFor })}
      >
        {text}
      </Typography>

      {children}
    </div>
  );
}
