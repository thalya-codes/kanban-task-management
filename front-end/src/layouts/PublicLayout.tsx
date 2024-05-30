import { Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '@/components/project';
import Logo from '@/assets/logo-dark.svg?react';

export function PublicLayout() {
  return (
    <>
      <header className='flex bg-white w-full h-[10%] justify-between items-center px-5'>
        <h1>
          <Logo />
        </h1>
        <ThemeSwitcher className='w-1/6 bg-white' />
      </header>

      <main className='self-center flex justify-center items-center w-full h-full'>
        <Outlet />
      </main>

      <footer className='bg-white text-center absolute bottom-0 w-full py-5'>
        <p>
          © 2024 All rights reserved -
          <a
            href='https://github.com/thalya-codes'
            className='hover:text-primary-purple'
            target='_blank'
          >
            &nbsp; thalya.codes
          </a>
        </p>{' '}
      </footer>
    </>
  );
}
