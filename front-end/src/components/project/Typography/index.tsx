import { cn } from '@/utils/cn';
import { TypographyVariants } from './variant';
import { TTypographyProps } from './types';

export function Typography<Type>({
  as: Tag = 'p',
  color = 'gray',
  size = 'md',
  children,
  className = '',
  ...props
}: TTypographyProps<Type>) {
  return (
    <Tag
      className={cn(TypographyVariants({ color, size }), className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
