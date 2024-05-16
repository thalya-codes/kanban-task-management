import { UserModel } from '../models/UserModel';
import { IUserBaseInfos } from '../interfaces';
import {
  HttpError,
  ALREADY_EXISTING_USER,
  REQUIRED_REGISTER_FIELDS_NOT_FILLED,
} from '../errors';

export async function validateFields({
  email,
  password,
  name,
}: IUserBaseInfos<{ name: string }>) {
  if (!email || !name || !password)
    throw new HttpError(REQUIRED_REGISTER_FIELDS_NOT_FILLED, 400);

  const user = await UserModel.findOne({ email });

  if (user?.email) {
    throw new HttpError(ALREADY_EXISTING_USER, 409);
  }
}
