import { Root, Portal, Close, Trigger } from '@radix-ui/react-dialog';
import { DialogOverlay } from './DialogOverlay';
import { DialogContent } from './DialogContent';
import { DialogHeader } from './DialogHeader';
import { DialogFooter } from './DialogFooter';
import { DialogDescription } from './DialogDescription';
import { DialogTitle } from './DialogTitle';

export const Modal = {
  Root,
  Portal,
  Close,
  Trigger,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
};