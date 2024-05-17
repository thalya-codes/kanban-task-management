import { cn } from '@/utils/cn';
import { IInputRootProps } from './interfaces';

export function InputRoot({
  status = 'default',
  children,
  className = '',
}: IInputRootProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-sm border border-input  [&>input]:flex-1 [&>input]:border-none bg-white pr-2',
        status === 'error' &&
          'border-primary-red focus-within:border-primary-red',
        className
      )}
    >
      {children}
    </div>
  );
}
