import { Request, Response } from 'express';
import {
  loginInputValidator,
  registerInputValidator,
} from '../helpers/validators';
import User from '../models/User';

export const register = async (req: Request, res: Response) => {
  const { userName, email, password, firstName, lastName } = req.body;

  const { valid, errors } = registerInputValidator(
    userName,
    firstName,
    email,
    password
  );

  const existUser = await User.findOne({ email }).select('+userName');

  if (existUser) {
    return res.status(409).send({ errorMsg: 'User is already exist.' });
  }

  if (!valid) {
    return res.status(400).send(errors);
  }

  const newAccount = await User.create({
    userName,
    email,
    password,
    firstName,
    lastName,
  });

  return res.status(201).send({ newAccount });
};

export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const { valid, errors } = loginInputValidator(userName, password);

  if (!valid) {
    res.status(400).send(errors);
  }

  const user = await User.findOne({ userName }).select('+password');

  try {
    const isPasswordCorrect = await user?.comparePasswords(password);
    if (!user || !isPasswordCorrect) {
      res.status(401).send({ errorMsg: 'Invalid credentials' });
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ errorMsg: 'An error occurred' });
  }
};
