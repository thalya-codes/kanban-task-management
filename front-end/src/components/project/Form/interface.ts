import { InputProps } from '@/components/library';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IFormPasswordFieldProps extends InputProps {
  register: UseFormRegister<FieldValues>;
  errorMsg?: string | undefined;
}
