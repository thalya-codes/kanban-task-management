import { ReactNode } from 'react';

type THeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TTypographyProps<Type> = Type & {
  as?: 'label' | 'p' | 'legend' | THeadingTags;
  color?: 'black' | 'gray' | 'purple';
  size?: 'xs' | 'sm' | 'md' | 'xl' | '2xl';
  children: ReactNode;
  className?: string;
};
