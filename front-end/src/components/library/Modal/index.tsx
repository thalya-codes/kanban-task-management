import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogOverlay } from './DialogOverlay';
import { DialogContent } from './DialogContent';
import { DialogHeader } from './DialogHeader';
import { DialogFooter } from './DialogFooter';
import { DialogDescription } from './DialogDescription';
import { DialogTitle } from './DialogTitle';

export const Modal = {
  Root: DialogPrimitive.Root,
  Portal: DialogPrimitive.Portal,
  Overlay: DialogOverlay,
  Close: DialogPrimitive.Close,
  Trigger: DialogPrimitive.Trigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
};