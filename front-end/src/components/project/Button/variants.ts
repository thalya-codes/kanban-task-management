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
      },
    },
  }
);
