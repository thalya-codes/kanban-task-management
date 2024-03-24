import { cn } from '@/utils/cn';
import { IInputRootProps } from './interfaces';

export function InputRoot({ children, className = '' }: IInputRootProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-sm border border-input border-primary-red focus-within:border-primary-red [&>input]:flex-1 [&>input]:border-none',
        className
      )}
    >
      {children}
    </div>
  );
}
