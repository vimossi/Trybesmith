import usersModel from '../models/usersModel';
import createJWT from '../auth/createJWT';
import { IUserInfos } from '../utils/interfaces';

const create = async (user: IUserInfos): Promise<string> => {
  const userPayload = await usersModel.create(user);
  const token: string = createJWT(userPayload);
  return token;
};

export default {
  create,
}; 
