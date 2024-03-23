import { cva } from 'class-variance-authority';

export const ThemeSwitcherVariants = cva(
  'flex justify-center items-center gap-4  w-[18%] py-2 px-4 box-border rounded-md',
  {
    variants: {
      mode: {
        light: 'bg-primary-extra-light-purple',
        dark: 'bg-neutral-translucent-black',
      },
    },
  }
);
