import { FieldContainer, Input, FormBase } from '@/components/project';

export function RegisterPage() {
  return (
    <FormBase isLoginForm={false} onClick={() => {}}>
      <FieldContainer htmlFor='name' color='purple' text='Name'>
        <Input.Field placeholder='Your name' id='name' />
      </FieldContainer>
    </FormBase>
  );
}
