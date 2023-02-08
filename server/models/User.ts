import mongoose, { Document, Schema } from 'mongoose';

type User = {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  profilePicture?: string;
  _id: mongoose.Schema.Types.ObjectId;
};

const UserSchema = new mongoose.Schema<User>({
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

export default mongoose.model('Users', UserSchema);
