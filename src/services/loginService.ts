import createJWT from '../auth/createJWT';
import { IUserLogin } from '../utils/interfaces';
import usersModel from '../models/usersModel';

export default async (userLogin: IUserLogin) => {
  const error = await usersModel.getUser(userLogin);

  if (!error) {
    return {
      code: 401,
      error: 'Username or password invalid',
    };
  }

  const userPayload = {
    id: error.id,
    username: error.username,
  };

  const token = createJWT(userPayload);

  return { code: 200, token };
};
