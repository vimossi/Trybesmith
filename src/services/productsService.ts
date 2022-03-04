import productsModel from '../models/productsModel';
import { INewProduct } from '../utils/interfaces';

const create = async (newProduct: INewProduct) => {
  const product = await productsModel.create(newProduct);

  return product;
};

export default {
  create,
};
