import { Router } from 'express';
import { login, register } from '../controllers/userControllers';

const router = Router();

router.route('/register').post(register);
router.route('/login').get(login);

export default router;
