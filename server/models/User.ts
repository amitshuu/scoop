import mongoose, { Document, Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';
import { resolve } from 'path';
import { IUserSchema } from '../helpers/types';

const UserSchema = new mongoose.Schema<IUserSchema>({
  userName: {
    type: String,
    minLength: 6,
    maxLength: 16,
  },
  email: String,
  password: {
    type: String,
    minLength: 6,
  },
  firstName: String,
  lastName: String,
  profilePicture: {
    type: String,
    default:
      'https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png',
  },
});

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

UserSchema.methods.comparePasswords = async function (password: string) {
  return await bcryptjs.compare(password, this.password);
};

export default mongoose.model('Users', UserSchema);
