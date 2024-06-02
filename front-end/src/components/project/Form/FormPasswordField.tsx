import { ForwardRefExoticComponent, forwardRef } from 'react';
import { Input, Typography } from '@/components/project';
import { Tooltip } from '@/components/library/Tooltip';
import { useTogglePasswordType } from '@/hooks/useTogglePasswordType';
import { OpenEye, HideEye, InfoMark } from '@/assets';
import { IFormPasswordFieldProps } from './interface';

export const FormPasswordField: ForwardRefExoticComponent<IFormPasswordFieldProps> =
  forwardRef(({ register, errorMsg }) => {
    const { passwordType, togglePasswordType } = useTogglePasswordType();

    return (
      <div className='flex flex-col gap-2'>
        <div className='flex gap-3 items-center w-full'>
          <Typography
            as='label'
            size='sm'
            htmlFor='password'
            className='text-primary-purple'
          >
            Password
          </Typography>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span>
                  <InfoMark />
                </span>
              </Tooltip.Trigger>
              <Tooltip.Content side='left'>
                <p>
                  The password must be have contain uppercase e lowercase
                  letters, numbers, special character and at least 8 characters.
                </p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

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
      </div>
    );
  });
