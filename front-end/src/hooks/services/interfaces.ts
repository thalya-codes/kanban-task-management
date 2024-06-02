import { UseMutationOptions } from '@tanstack/react-query';

export interface IUsePost
  extends Omit<UseMutationOptions, 'mutationKey' | 'mutationFn'> {
  endpoint: string;
  key: string;
}
