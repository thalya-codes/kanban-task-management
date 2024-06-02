import 'react-toastify/dist/ReactToastify.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { emailPasswordSchema } from '@/utils/schemas';
import {
  Button,
  FieldContainer,
  Form,
  Input,
  Typography,
} from '@/components/project';
import { usePost } from '@/hooks/services/usePost';
import { Loading } from '@/components/library';

export function LoginPage() {
  const navigateTo = useNavigate();
  const { mutate: authenticateUser, isPending } = usePost({
    key: 'log-user',
    endpoint: 'login',
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailPasswordSchema),
  });

  const onSubmit = (data: any) => {
    authenticateUser(data);
    navigateTo('/boards');
  };

  return (
    <>
      <Form.Root onSubmit={handleSubmit(onSubmit as any)}>
        <fieldset className='flex flex-col gap-8 '>
          <Typography
            as='legend'
            className='text-center font-bold text-2xl leading-3 tracking-wide mb-8'
            color='purple'
            size='2xl'
          >
            Sign in
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
              {...register('email', { required: true })}
            />
            {errors?.email && (
              <Input.ErrorMsg
                message={errors?.email?.message as string | undefined}
              />
            )}
          </FieldContainer>

          <div>
            <Form.PasswordField
              register={register}
              {...(errors?.password && {
                errorMsg: errors?.password.message as string | undefined,
              })}
            />
          </div>

          <Button className='rounded-sm' disabled={isPending}>
            {isPending ? <Loading /> : 'Login'}
          </Button>
        </fieldset>
        <Form.Footer
          link={'/register'}
          linkText={'Create an account'}
          message=" Don't have an account yet?"
        />
      </Form.Root>
      <ToastContainer />
    </>
  );
}
