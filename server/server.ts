import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { connectDB } from './database/connect';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter';
import { notFoundMiddleware } from './middlewares/notFoundRoute';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', userRouter);

app.use(notFoundMiddleware);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    console.log(`MongoDB Connected: ${mongoose.connection.host} 👀`);
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is up on port ${process.env.PORT} 🚀`);
    });
  } catch (error) {}
};

startServer();
