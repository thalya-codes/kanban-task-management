import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { http } from '@/services';
import { IUsePost } from './interfaces';

export function usePost<T = ''>({ key, endpoint, ...props }: IUsePost) {
  return useMutation({
    mutationKey: [key],
    mutationFn: (data) => http.post<T>(`${endpoint}`, data as T),
    onError: (error) => {
      toast(error?.message, {
        type: 'error',
        theme: 'light',
        className: 'top-20',
      });
    },
    ...props,
  });
}
