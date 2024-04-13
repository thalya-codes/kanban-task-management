import { TSetStateBoolean } from '@/generalTypings';
import { ReactNode } from 'react';

export interface IModalDeleteProps {
  title: string;
  description: string | ReactNode;
  open?: boolean | undefined;
  setShow?: TSetStateBoolean;
  setShowParentModal?: TSetStateBoolean;
}
