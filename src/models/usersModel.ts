import { ResultSetHeader } from 'mysql2';
import { IUserInfos, IUserPayload } from '../utils/interfaces';
import connection from './connection';

const create = async (user: IUserInfos): Promise<IUserPayload> => {
  const [newUser] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );

  const { insertId: id } = newUser;

  return {
    id,
    username: user.username,
  };
};

export default {
  create,
};
