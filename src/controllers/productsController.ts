import { Request, Response } from 'express';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const newProduct = req.body;

  const product = await productsService.create(newProduct);

  return res.status(201).json({ item: product });
};

export default {
  create,
};
