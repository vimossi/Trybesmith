import { Router } from 'express';
import loginController from '../controllers/loginController';
import validateLogin from '../middlewares/validateLogin';

const login = Router();

login.post('/', validateLogin, loginController);

export default login;
