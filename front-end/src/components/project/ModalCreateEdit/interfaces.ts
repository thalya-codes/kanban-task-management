import { ReactNode } from 'react';
import { TSetStateBoolean } from '@/generalTypings';

export interface IModalCreateEditProps {
  type?: 'task' | 'board';
  children?: ReactNode;
  title: string;
  finishActionText: string;
  open?: boolean;
  setShow: TSetStateBoolean;
}
