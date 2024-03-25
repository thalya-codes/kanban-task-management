import { cva } from 'class-variance-authority';

export const TypographyVariants = cva('font-medium', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-base',
      md: 'text-xl',
    },
    color: {
        black: "text-black",
        gray: "text-neutral-medium-gray"
    }
  },
});
