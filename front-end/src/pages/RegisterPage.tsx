import OpenEye from '@/assets/eye.svg?react';
import HideEye from '@/assets/icon-hide.svg?react';
import { Button, FieldContainer, Input } from '@/components/project';
import { useTogglePasswordType } from '@/hooks/useTogglePasswordType';

export function RegisterPage() {
  const { passwordType, togglePasswordType } = useTogglePasswordType();

  return (
    <form className='flex flex-col gap-10 w-3/6 sm:w-5/6'>
      <FieldContainer htmlFor='name' color='black' text='Name'>
        <Input.Field placeholder='My name' id='name' />
      </FieldContainer>

      <FieldContainer htmlFor='email' color='black' text='Email'>
        <Input.Field id='email' type='email' placeholder='email@email.com' />
      </FieldContainer>

      <FieldContainer htmlFor='password' color='black' text='Email'>
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
              <OpenEye className='w-8 h-8 bg-white' />
            ) : (
              <HideEye className='w-8 h-8 bg-white' />
            )}
          </button>
        </Input.Root>
      </FieldContainer>

      <Button>Register</Button>
    </form>
  );
}
