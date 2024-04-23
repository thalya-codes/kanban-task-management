import { Router } from 'express';
import { registerUser, treatRegisterUserErrors } from './functions';

const router = Router();

router.post('/register', async ({ body }, response) => {
  try {
    await treatRegisterUserErrors(body);
    registerUser(response, body);
  } catch (error: any) {
    response.status(error.status).json({ message: error.message });
  }
});

export default router;
