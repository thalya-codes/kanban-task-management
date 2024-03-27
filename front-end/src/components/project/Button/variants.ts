import { cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  'rounded-2xl py-2 px-5 transition-all w-full font-medium text-[10px]',
  {
    variants: {
      variant: {
        purple: 'bg-primary-purple hover:bg-primary-light-purple text-white',
        'light-purple':
          'bg-primary-extra-light-purple hover:bg-primary-medium-purple text-primary-purple',
        red: 'bg-primary-red hover:bg-primary-light-red text-white',
        'link-medium-gray': 'text-neutral-medium-gray hover:underline',
        'link-red': 'text-primary-red hover:underline',
        drawer:
          '[&>svg]:ml-10 text-md h-12 rounded-3xl flex justify-center items-center gap-3 text-neutral-medium-gray hover:bg-primary-extra-light-purple data-[drawer-active=true]:bg-primary-purple data-[drawer-active=true]:hover:bg-primary-purple data-[drawer-active=true]:text-white data-[drawer-active=false]:[&_span]:hover:text-primary-purple',
      },
    },
  }
);
