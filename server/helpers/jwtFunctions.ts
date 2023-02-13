import { UserType } from './types';
import jwt from 'jsonwebtoken';

export const signJWT = (user: UserType | null) => {
  const accessToken = jwt.sign(
    { id: user?._id },
    process.env.ACCESS_TOKEN_KEY!,
    {
      expiresIn: '5m',
    }
  );

  const refreshToken = jwt.sign(
    { id: user?._id },
    process.env.REFRESH_TOKEN_KEY!,
    {
      expiresIn: '7d',
    }
  );

  return { accessToken, refreshToken };
};
