import { cn } from '@/utils/cn';
import { Button } from '@/components/project/Button';
import { Typography } from '@/components/project/Typography';
import LogoDark from '@/assets/logo-dark.svg?react';
import BoardIcon from '@/assets/icon-board.svg?react';
import HideIcon from '@/assets/icon-hide.svg?react';
import { ThemeSwitcher } from '@/components/project/ThemeSwitcher';
import { IDrawerContentProps } from './interface';

export function DrawerContent({
  show,
  onShow,
  boards,
  activeBoardId,
  onCreateNewBoard,
}: IDrawerContentProps) {
  return (
    <section
      className={cn(
        'justify-between top-0 bottom-0 fixed left-0 h-screen bg-white w-[300px] border transition-all py-10 flex flex-col ',
        show ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div>
        <Typography as='h1' className='pl-7'>
          <LogoDark />
        </Typography>

        <div className='pl-7 mt-14 mb-8'>
          <Typography className='uppercase tracking-[2px]' size='xs'>
            All Boards ({boards?.length})
          </Typography>
        </div>

        <ul className='flex flex-col gap-2'>
          {boards?.map(({ id, name, onClick }) => {
            const isactiveBoardId = id === activeBoardId;

            return (
              <li key={id} className='-translate-x-10'>
                <Button
                  onClick={() => {
                    onClick(id);
                  }}
                  variant={'drawer'}
                  data-drawer-active={isactiveBoardId}
                  className={cn('[&>*]:-translate-x-[55px]')}
                >
                  <BoardIcon
                    className={
                      isactiveBoardId
                        ? 'text-white'
                        : 'text-neutral-medium-gray'
                    }
                  />{' '}
                  <span>{name}</span>
                </Button>
              </li>
            );
          })}

          <li className='-translate-x-10'>
            <Button
              onClick={onCreateNewBoard}
              variant='drawer'
              className='[&>*]:text-primary-purple'
              data-drawer-active={false}
            >
              <BoardIcon />
              <span> +Create New Board</span>
            </Button>
          </li>
        </ul>
      </div>

      <footer className='flex flex-col gap-3'>
        <ThemeSwitcher />
        <Button
          onClick={() => onShow(false)}
          variant='drawer'
          className='-translate-x-12'
          data-drawer-active={false}
        >
          <HideIcon className='w-5' />
          <span>Hide Sidebar</span>
        </Button>
      </footer>
    </section>
  );
}
