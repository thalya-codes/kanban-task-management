import { Typography } from '@/components/project/Typography';
import { IFieldContainerProps } from './interface';
import { cn } from '@/utils/cn';

export function FieldContainer({
  text,
  children,
  className = '',
}: IFieldContainerProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Typography as='label' size='sm' className={cn('className', className)}>
        {text}
      </Typography>

      {children}
    </div>
  );
}
