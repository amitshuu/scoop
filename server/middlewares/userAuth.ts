import { NextFunction, Response } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import decode from 'jwt-decode';
import { CustomRequest, DecodedJWT, UserType } from '../helpers/types';
import User from '../models/User';

const validateToken = async (
  token: string,
  key: string
): Promise<DecodedJWT> => {
  try {
    const payload = jwt.verify(token, key) as DecodedJWT;
    return payload;
  } catch (error) {
    throw error;
  }
};

export const userAuth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!refreshToken || !accessToken) {
    res.status(401).send({ errorMsg: 'Unauthorized, token is invalid.' });
  }

  try {
    const payload = await validateToken(
      accessToken!,
      process.env.ACCESS_TOKEN_KEY!
    );
    const user = await User.findById(payload.id).select('-password');
    req.user = user;
    next();
  } catch (error) {
    if (refreshToken && TokenExpiredError) {
      try {
        const decodedRefresh = decode(refreshToken!) as DecodedJWT;
        const newToken = jwt.sign(
          { id: decodedRefresh?.id },
          process.env.ACCESS_TOKEN_KEY!,
          {
            expiresIn: '5m',
          }
        );
        res.cookie('accessToken', newToken, {
          httpOnly: true,
          maxAge: 5 * 60 * 1000,
        });
        const payload = await validateToken(
          accessToken!,
          process.env.ACCESS_TOKEN_KEY!
        );
        const user = await User.findById(payload.id).select('-password');
        req.user = user;
        next();
      } catch (error) {
        res.status(401).send({ errorMsg: 'Invalid token' });
      }
    } else {
      res.status(400).send(error); //TODO: Logout user.
    }
  }
};
