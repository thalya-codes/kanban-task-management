import { ReactNode } from 'react';

export function InputErrorMsg({ children }: { children: ReactNode }) {
  return <span className='text-sm text-red-500 flex-2 pr-3'>{children}</span>;
}
