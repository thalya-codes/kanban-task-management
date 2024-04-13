import { Dispatch, SetStateAction } from 'react';

export type TSetStateBoolean = Dispatch<SetStateAction<boolean>>;

export interface IHandleMultipleModalsVisibilityParams {
  setShowPrimary?: TSetStateBoolean;
  setShowSecondary?: TSetStateBoolean;
  openSecondary?: boolean;
}
