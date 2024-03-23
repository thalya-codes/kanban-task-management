import { Switch } from '@/components/library/Switch';
import DarkThemeIcon from '@/assets/icon-dark-theme.svg?react';
import LightThemeIcon from '@/assets/icon-light-theme.svg?react';
import { cn } from '@/utils/cn';
import { ThemeSwitcherVariants } from './variants';

export function ThemeSwitcher({ mode = 'light' }: { mode?: 'light' | 'dark' }) {
  return (
    <div className={cn(ThemeSwitcherVariants({ mode }))}>
      <LightThemeIcon />
      <Switch />
      <DarkThemeIcon />
    </div>
  );
}
