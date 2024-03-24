import { cn } from '@/utils/cn';
import { TypographyVariants } from './variant';
import { TTypographyProps } from './types';

export function Typography<Type>({
  as: Tag = 'p',
  color = 'gray',
  size = 'sm',
  children,
  ...props
}: TTypographyProps<Type>) {
  return (
    <Tag className={cn(TypographyVariants({ color, size }))} {...props}>
      {children}
    </Tag>
  );
}
