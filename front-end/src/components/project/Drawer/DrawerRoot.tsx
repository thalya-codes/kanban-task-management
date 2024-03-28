import { ReactNode } from 'react';

export function DrawerRoot({ children }: { children: ReactNode }) {
  return (
    <div className='h-screen flex flex-col justify-between'>{children}</div>
  );
}
