import bcrypt from 'bcrypt';
import { UserModel } from '../../models/UserModel';
import { IUser, IUserBaseInfos } from '../../interfaces';
import { HttpError, INVALID_PASSWORD, INVALID_USER_EMAIL } from '../../errors';

export async function validateCredentials({ email, password }: IUserBaseInfos) {
  const user = (await UserModel.findOne({ email })) as IUser;

  if (!user) throw new HttpError(INVALID_USER_EMAIL, 401, 'UNREGISTERED_USER');

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid)
    throw new HttpError(INVALID_PASSWORD, 401, 'INVALID_PASSWORD');

  return user;
}
