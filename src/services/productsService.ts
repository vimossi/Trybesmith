import productsModel from '../models/productsModel';
import { INewProduct } from '../utils/interfaces';

const create = async (newProduct: INewProduct) => {
  const product = await productsModel.create(newProduct);

  return product;
};

const getAll = async () => {
  const products = await productsModel.getAll();

  return products;
};

export default {
  create,
  getAll,
};
