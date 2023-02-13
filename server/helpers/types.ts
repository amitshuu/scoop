import { Request } from 'express';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface IUserSchema extends Document {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  profilePicture?: string;
  _id: mongoose.Schema.Types.ObjectId;
  comparePasswords: (password: string) => Promise<boolean>;
}

export type UserType = {
  _id: mongoose.Schema.Types.ObjectId;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  profilePicture?: string;
};

export interface DecodedJWT {
  id?: string;
  iat?: number;
  exp?: number;
}

export type CustomRequest = Request & { user?: UserType | null };
