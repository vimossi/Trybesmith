import { Request, Response } from 'express';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const newProduct = req.body;

  const product = await productsService.create(newProduct);

  return res.status(201).json({ item: product });
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productsService.getAll();

  return res.status(200).json(products);
};

export default {
  create,
  getAll,
};
