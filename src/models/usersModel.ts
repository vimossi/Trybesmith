import { ResultSetHeader } from 'mysql2';
import { IUserInfos, IUserPayload, IUserLogin } from '../utils/interfaces';
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

const getUser = async (userLogin: IUserLogin): Promise<IUserPayload> => {
  const [getByName] = await connection.execute(
    'SELECT id, username FROM Trybesmith.Users WHERE username = (?) and password = (?);',
    [userLogin.username, userLogin.password],
  );

  const [row] = getByName as IUserPayload[];

  return row;
};

export default {
  create,
  getUser,
};
