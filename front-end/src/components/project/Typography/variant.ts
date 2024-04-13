import { cva } from 'class-variance-authority';

export const TypographyVariants = cva('font-medium', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      xl: 'text-xl',
    },
    color: {
      black: 'text-black',
      gray: 'text-neutral-medium-gray',
    },
  },
});
