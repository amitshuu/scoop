import mongoose from 'mongoose';

export const connectDB = (mongoUrl: string) => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(mongoUrl);
};
