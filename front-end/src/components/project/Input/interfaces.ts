import { ReactNode } from 'react';

export interface IInputRootProps {
  children: ReactNode;
  className?: string;
  status?: 'error' | 'default';
}
