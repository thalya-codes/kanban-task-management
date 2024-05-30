import { ForwardRefExoticComponent, forwardRef } from 'react';
import { Input, FieldContainer } from '@/components/project';
import { useTogglePasswordType } from '@/hooks/useTogglePasswordType';
import { OpenEye, HideEye } from '@/assets';
import { IFormPasswordFieldProps } from './interface';

export const FormPasswordField: ForwardRefExoticComponent<IFormPasswordFieldProps> =
  forwardRef(({ register, errorMsg }) => {
    const { passwordType, togglePasswordType } = useTogglePasswordType();

    return (
      <FieldContainer
        htmlFor='password'
        color='black'
        text='Password'
        className='text-primary-purple'
      >
        <Input.Root>
          <Input.Field
            id='password'
            type={passwordType}
            placeholder='***'
            {...register('password', { required: 'This field is required' })}
          />

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
        {errorMsg && <Input.ErrorMsg message={errorMsg} />}
      </FieldContainer>
    );
  });
