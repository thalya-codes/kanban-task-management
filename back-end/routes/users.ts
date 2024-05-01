import { Router } from 'express';
import { UserModel } from '../database/Models/UserModel';

const router = Router();

router.get('/users', async (request, response) => {
  try {
    const users = await UserModel.find();

    if (users.length === 0) {
      const error = new Error('não foi possível encontrar os usuários');

      response.status(404);
      console.error(error);
      throw error;
    }

    response.status(200).json(users);
  } catch (error: any) {
    response.status(400).send(error.message);
  }
});

export default router;
