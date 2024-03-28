import { Button } from '@/components/project/Button';
import EyeIcon from '@/assets/eye.svg?react';
import { IDrawerTriggerProps } from './interface';

export function DrawerTrigger({ onShow }: IDrawerTriggerProps) {
  return (
    <Button
      onClick={() => onShow(true)}
      className='rounded-3xl w-44 flex justify-end -translate-x-28 fixed bottom-12'
    >
      <EyeIcon className='fill-white w-6 h-8 ' aria-label='Open sidebar menu'/>
    </Button>
  );
}
