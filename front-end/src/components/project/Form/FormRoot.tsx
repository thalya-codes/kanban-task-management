import { HTMLAttributes } from 'react';

export function FormRoot(props: HTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className='flex flex-col gap-10 h-max w-3/6 sm:w-5/6 bg-white px-8 py-14 rounded-lg shadow-md'
      {...props}
    />
  );
}
