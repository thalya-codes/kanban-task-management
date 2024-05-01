import { Router } from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../../database/Models/UserModel';
import { HttpError } from '../../errors/HttpError';
import JWT from 'jsonwebtoken';

const router = Router();

router.post('/login', async ({ body: { email, password } }, response) => {
  try {
    const user = (await UserModel.findOne({ email })) as any;

    if (!user.email) throw new HttpError('E-mail incorreto', 400);

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) throw new HttpError('Senha inválida', 401);

    JWT.sign(
      { payload: user },
      process.env.JWT_SECRET as string,
      (err: any, token: any) => {
        if (err) throw new Error('Falha ao gerar token jwt');

        response.status(200).json({ token });
      }
    );
  } catch (error: any) {
    response.status(error.status).json({ message: error?.message || error });
  }
});

export default router;
