import { cva } from 'class-variance-authority';

export const ThemeSwitcherVariants = cva(
  'flex justify-center items-center gap-5 self-center w-[90%] h-[50px] py-2 px-4 box-border rounded-md',
  {
    variants: {
      mode: {
        light: 'bg-primary-extra-light-purple',
        dark: 'bg-neutral-translucent-black',
      },
    },
  }
);
