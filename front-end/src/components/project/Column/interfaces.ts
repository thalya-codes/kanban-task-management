import { DropResult } from 'react-beautiful-dnd';
import { ReactNode } from 'react';
import { ICardProps } from '@/components/project/Card/interface';

export interface IColumnBaseProps {
  id: string;
  index: number;
}

export interface IColumnTasks extends ICardProps {
  id: string;
}

export interface IColumnsData {
  id: string;
  title: string;
  tasks: IColumnTasks[];
}

export interface IColumnAreaProps extends IColumnBaseProps, IColumnsData {
  color: string;
}

export interface IColumnItemsProps extends ICardProps, IColumnBaseProps {}

export interface IColumnRootProps {
  children: ReactNode;
  onDragEnd: (result: DropResult) => null | undefined;
}
