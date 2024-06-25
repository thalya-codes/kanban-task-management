import { Router } from 'express';
import { verifyAuthorization } from '../utils/auth';
import {
  UserController,
  BoardsController,
  RevokedTokensController,
} from '../controllers';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/logout', RevokedTokensController.addToRevokedList);
router.get('/boards/:userId', verifyAuthorization, BoardsController.getAll);
router.post('/boards/:userId', verifyAuthorization, BoardsController.createBoard);

export default router;
