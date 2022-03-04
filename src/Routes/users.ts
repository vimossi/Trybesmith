import { Router } from 'express';
import validationsUser from '../middlewares/validateUsers';
import usersController from '../controllers/usersController';

const users = Router();

users.post('/', validationsUser, usersController.create);

export default users; 
