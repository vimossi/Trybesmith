import { Request, Response } from 'express';
import loginService from '../services/loginService';

export default async (req: Request, res: Response) => {
  const userLogin = req.body;
  const token = await loginService(userLogin);

  if (token.error) {
    return res.status(token.code).json({ error: token.error });
  }

  return res.status(token.code).json({ token: token.token });
};
