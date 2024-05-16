import mongoose from 'mongoose';

export default async function connect() {
 return await mongoose.connect(process.env.CONNECTION_STRING as string);
}
