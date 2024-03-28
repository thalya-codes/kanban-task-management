import { Dispatch, SetStateAction } from 'react';

export interface IDrawerContentProps {
  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  boards: { id: string; name: string; onClick: (id: string) => void }[];
  activeBoardId: string;
  onCreateNewBoard: () => void;
}

export interface IDrawerTriggerProps {
  onShow: Dispatch<SetStateAction<boolean>>;
}
