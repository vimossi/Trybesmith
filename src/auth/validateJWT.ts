import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'qualquercoisa';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    jwt.verify(token, secret);

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Expired or invalid token' });
  }
};
