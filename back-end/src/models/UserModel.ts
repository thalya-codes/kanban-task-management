import mongoose, { Schema } from 'mongoose';
import { userBoardsSchema } from './UserBoardsModel';
import { IUser } from '../interfaces';

const userSchema = new Schema({
  id: { type: Schema.ObjectId },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
  boards: [userBoardsSchema],
});

export const UserModel = mongoose.model<IUser & Document>('User', userSchema);
