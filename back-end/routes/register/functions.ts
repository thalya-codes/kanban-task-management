import { hash } from 'bcrypt';
import { Response } from 'express';
import { UserModel } from '../../database/Models/UserModel';
import { HttpError } from '../../errors/HttpError';
import { IUser } from '../../interfaces';

export async function treatRegisterUserErrors({
  email,
  name,
  password,
}: IUser) {
  if (!email || !name || !password)
    throw new HttpError(
      "Os campos: 'email', 'password' e 'name' são obrigatórios. Por favor, verifique se todos foram inseridos.",
      400
    );

  const user = await UserModel.findOne({ email });

  if (user?.email) {
    throw new HttpError(
      'Já existe um usuário cadastrado com esse e-mail. Por favor, escolha outro e-mail válido ou realize login.',
      409
    );
  }
}

export async function registerUser(
  response: Response,
  { email, password, ...restBody }: IUser
) {
  const passwordHash = await hash(password, 8);
  await UserModel.create({ email, password: passwordHash, ...restBody });
  response.status(201).json({ message: 'Usuário criado com sucesso.' });
}
