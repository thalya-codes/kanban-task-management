import { HTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'purple' | 'light-purple' | 'red' | 'link-medium-gray' | 'link-red';
  children: ReactNode;
}