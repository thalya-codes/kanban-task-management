import { Switch } from '@/components/library';
import DarkThemeIcon from '@/assets/icon-dark-theme.svg?react';
import LightThemeIcon from '@/assets/icon-light-theme.svg?react';
import { cn } from '@/utils/cn';
import { ThemeSwitcherVariants } from './variants';

export function ThemeSwitcher({
  mode = 'light',
  className = '',
}: {
  mode?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <div className={cn(ThemeSwitcherVariants({ mode }), className)}>
      <LightThemeIcon className='w-6 h-6' />
      <Switch />
      <DarkThemeIcon className='w-6 h-6' />
    </div>
  );
}
