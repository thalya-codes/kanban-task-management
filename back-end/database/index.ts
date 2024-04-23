import mongoose from 'mongoose';

export default async function connect() {
  return await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.PASSWORD}@${process.env.DB_NAME}.avckf4c.mongodb.net/`
  );
}
