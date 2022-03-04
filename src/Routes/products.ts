import { Router } from 'express';
import validateProducts from '../middlewares/validateProducts';
import productsController from '../controllers/productsController';
import validateJWT from '../auth/validateJWT';

const products = Router();

products.post('/', validateJWT, validateProducts, productsController.create);
products.get('/', validateJWT, productsController.getAll);

export default products;
