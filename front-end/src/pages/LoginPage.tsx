import { useForm } from 'react-hook-form';
import {
  Button,
  FieldContainer,
  Form,
  Input,
  Typography,
} from '@/components/project';

export function LoginPage() {
  const { handleSubmit, register } = useForm();
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
          Create an account
        </Typography>

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
        </FieldContainer>

        <Form.PasswordField register={register} />
        <Button className='rounded-sm'>Login</Button>
      </fieldset>
    </Form.Root>
  );
}
