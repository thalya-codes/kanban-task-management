import { ReactNode } from 'react';

export interface IFieldContainerProps {
  htmlFor?: string;
  text: string;
  children: ReactNode;
  className?: string;
  color?: 'gray' | 'black';
}
