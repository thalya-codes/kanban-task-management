import { useForm } from 'react-hook-form';
import {
  FieldContainer,
  Input,
  Form,
  Button,
  Typography,
} from '@/components/project';

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any): void => {
    console.log({ data });
  };

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <fieldset className='flex flex-col gap-8'>
        <Typography
          as='legend'
          className='text-center font-bold text-2xl leading-3 tracking-wide mb-8'
          color='purple'
          size='2xl'
        >
          {'Create an account'}
        </Typography>

        <FieldContainer htmlFor='name' color='purple' text='Name'>
          <Input.Field
            placeholder='Your name'
            id='name'
            {...register('name', {
              required: 'This field is required',
            })}
          />
          {errors?.name && (
            <Input.ErrorMsg
              message={errors?.name?.message as string | undefined}
            />
          )}
        </FieldContainer>

        <FieldContainer
          htmlFor='email'
          color='black'
          text='Email'
          className='text-primary-purple'
        >
          <Input.Field
            id='email'
            type='email'
            placeholder='email@email.com'
            {...register('email', { required: 'This field is required' })}
          />
          {errors?.email && (
            <Input.ErrorMsg
              message={errors?.email?.message as string | undefined}
            />
          )}
        </FieldContainer>

        <Form.PasswordField
          register={register}
          {...(errors?.password && {
            errorMsg: errors?.password?.message as string | undefined,
          })}
        />

        <Button className='rounded-sm'>Register</Button>
      </fieldset>
    </Form.Root>
  );
}
