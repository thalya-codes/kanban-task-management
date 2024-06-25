import { Response } from 'express';
import { generateJWT, validateCredentials } from '../utils/auth';
import { validateFields, createUser } from '../utils';
import { IUserRequest } from '../interfaces';

export class UserController {
  static async register(
    { body }: IUserRequest<{ name: string }>,
    response: Response
  ) {
    const { name, email, password } = body;

    try {
      validateFields({ name, email, password });
      await createUser(response, body);
    } catch (error: any) {
      response.status(error.status || 500).json(error);
    }
  }

  static async login(
    { body: { email, password } }: IUserRequest,
    response: Response
  ) {
    try {
      const user = await validateCredentials({ email, password });
      await generateJWT({ _id: user._id! }, response);
    } catch (error: any) {
      response.status(error.status || 500).json(error);
    }
  }
}
