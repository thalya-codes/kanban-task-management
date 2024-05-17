import { Link } from 'react-router-dom';
import { OpenEye, HideEye } from '@/assets';
import { IFormBase } from './interface';
import { useTogglePasswordType } from '@/hooks/useTogglePasswordType';
import {
  Input,
  Typography,
  Button,
  FieldContainer,
} from '@/components/project';

export function FormBase({ isLoginForm = true, children, onClick }: IFormBase) {
  const { passwordType, togglePasswordType } = useTogglePasswordType();

  return (
    <form className='flex flex-col gap-10 h-max w-3/6 sm:w-5/6 bg-white px-8 py-14 rounded-lg shadow-md'>
      <fieldset className='flex flex-col gap-8'>
        <Typography
          as='legend'
          className='text-center font-bold text-2xl leading-3 tracking-wide mb-8'
          color='purple'
          size='2xl'
        >
          {isLoginForm ? 'Sign in' : 'Create an account'}
        </Typography>

        {children}

        <FieldContainer
          htmlFor='email'
          color='black'
          text='Email'
          className='text-primary-purple'
        >
          <Input.Field id='email' type='email' placeholder='email@email.com' />
        </FieldContainer>

        <FieldContainer
          htmlFor='password'
          color='black'
          text='Password'
          className='text-primary-purple'
        >
          <Input.Root>
            <Input.Field id='password' type={passwordType} />

            <button
              type='button'
              onClick={togglePasswordType}
              aria-label={
                passwordType === 'password' ? 'Show password' : 'Hide password'
              }
            >
              {passwordType === 'password' ? (
                <OpenEye className='w-7 h-7 bg-white text-primary-purple' />
              ) : (
                <HideEye className='w-7 h-7 bg-white text-primary-purple' />
              )}
            </button>
          </Input.Root>
        </FieldContainer>
      </fieldset>

      <Button onClick={onClick}>{isLoginForm ? 'Login' : 'Register'}</Button>

      <p className='text-center'>
        {isLoginForm
          ? "Don't have an account yet?"
          : 'Already have an account?'}
        &nbsp;
        <Link
          to={isLoginForm ? '/register' : '/login'}
          className='text-primary-purple font-medium hover:underline hover:underline-offset-2'
        >
          {isLoginForm ? 'Create an account' : 'Login'}
        </Link>
      </p>
    </form>
  );
}
