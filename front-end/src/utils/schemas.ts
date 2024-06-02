import zod from 'zod';
import {
  EMPTY_FIELD,
  INVALID_EMAIL_FORMAT,
  NON_STANDARD_PASSWORD,
} from '@/enums/ErrorMessagesEnum';

const passwordRegx = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const emptyFieldSchema = zod.string().min(1, EMPTY_FIELD);

export const emailPasswordSchema = zod.object({
  email: emptyFieldSchema.email(INVALID_EMAIL_FORMAT),
  password: zod.string().regex(passwordRegx, NON_STANDARD_PASSWORD),
});

export const registerUserSchema = zod
  .object({ name: emptyFieldSchema })
  .merge(emailPasswordSchema);
