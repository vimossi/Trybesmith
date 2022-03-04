import jwt from 'jsonwebtoken';

interface IPayload {
  id: number,
  username: string
}

const secret = process.env.JWT_SECRET || 'qualquercoisa';

export default (payload: IPayload) => {
  const jwtConfig : {
    expiresIn: string,
    algorithm: jwt.Algorithm,
  } = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign(payload, secret, jwtConfig);
}; 
