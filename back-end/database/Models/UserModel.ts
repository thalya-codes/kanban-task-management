import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
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
  boards: {
    type: Map,
    of: {
      id: { type: String, required: true },
      title: { type: String, required: true },
      tasks: [
        {
          id: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          description: String,
          subTasks: {
            type: [{ id: String, text: String, isCompleted: Boolean }],
          },
        },
      ],
    },
  },
});

export const UserModel = mongoose.model('User', userSchema);
