import { ResultSetHeader } from 'mysql2';
import { INewProduct } from '../utils/interfaces';
import connection from './connection';

const create = async (newProduct: INewProduct) => {
  const { name, amount } = newProduct;
  const [product] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const { insertId: id } = product;

  return {
    id,
    name,
    amount,
  };
};

export default {
  create,
};
