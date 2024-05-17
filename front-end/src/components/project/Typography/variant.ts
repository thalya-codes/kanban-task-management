import { cva } from 'class-variance-authority';

export const TypographyVariants = cva('font-medium', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    color: {
      black: 'text-black',
      gray: 'text-neutral-medium-gray',
      purple: 'text-primary-purple',
    },
  },
});
