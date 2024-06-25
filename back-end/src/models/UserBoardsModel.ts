import { Schema } from 'mongoose';

export const userBoardsSchema = new Schema({
  id: { type: Schema.ObjectId },
  name: { type: String, required: true },
  columns: [
    {
      id: { type: Schema.ObjectId },
      color: { type: String, required: true },
      name: { type: String, required: true },
      tasks: [
        {
          id: { type: Schema.ObjectId },
          name: {
            type: String,
            required: true,
          },
          description: String,
          subTasks: {
            type: [
              {
                id: { type: Schema.ObjectId },
                text: String,
                isCompleted: Boolean,
              },
            ],
          },
        },
      ],
    },
  ],
});
