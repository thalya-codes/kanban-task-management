import { cn } from '@/utils/cn';
import { IButtonProps } from './interface';
import { ButtonVariants } from './variants';

export const Button = ({
  variant = 'purple',
  className = '',
  ...props
}: IButtonProps) => {
  return (
    <button className={cn(ButtonVariants({ variant }), className)} {...props} />
  );
};
