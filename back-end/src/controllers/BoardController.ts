import { Response } from 'express';
import { UserModel } from '../models/UserModel';
import { INVALID_USER_ID } from '../errors';
import { IBoardRequest } from '../interfaces';

export class BoardsController {
 static async getAll({ params }: IBoardRequest, response: Response) {
  try {
   const user = await UserModel.findOne({ _id: params.userId });

   if (!user) return response.status(400).json({ message: INVALID_USER_ID });
   response.status(200).json({ boards: user?.boards || [] });
  } catch (error: any) {
   response
    .status(error.status || 500)
    .json({ message: error?.message || error });
  }
 }
}
