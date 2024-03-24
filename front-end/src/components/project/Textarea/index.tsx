import { TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'border rounded-sm outline-none focus:border-primary-purple px-3 py-2',
        className
      )}
      data-testid="textarea"
      {...props}
    />
  );
}
