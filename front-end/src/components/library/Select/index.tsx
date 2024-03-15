import { Root, Value } from '@radix-ui/react-select';
import { SelectTrigger } from './SelectTrigger';
import { SelectContent } from './SelectContent';
import { SelectScrollUpButton } from './SelectScrollUpButton';
import { SelectScrollDownButton } from './SelectScrollDownButton';
import { SelectItem } from './SelectItem';

export const Select = {
  Root,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  SelectedValue: Value,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
};
