import { ReactNode } from "react";

type THeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TTypographyProps<Type> = Type & {
  as?: 'label' | 'p' | THeadingTags;
  color?: 'black' | 'gray';
  size?: 'xs' | 'sm' | 'md';
  children: ReactNode;
  className?: string;
};