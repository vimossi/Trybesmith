import { Request, Response } from 'express';
import usersService from '../services/usersService';

const create = async (req: Request, res: Response) => {
  const user = req.body;

  const token = await usersService.create(user);

  return res.status(201).json({ token });
};

export default {
  create,
};
