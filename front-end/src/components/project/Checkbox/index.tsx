import { ICheckboxProps } from './interface';
import { cn } from '@/utils/cn';

export function Checkbox({ className = '', ...props }: ICheckboxProps) {
  return (
    <input
      type='checkbox'
      className={cn(
        'w-5 h-5 appearance-none bg-white border checked:bg-primary-purple rounded-sm forced-colors:appearance-auto relative checked:before:content-["✓"] before:checked:absolute before:top-[10%] before:right-1 before:text-xs before:font-bold before:checked:text-white',
        className
      )}
      {...props}
    />
  );
}
