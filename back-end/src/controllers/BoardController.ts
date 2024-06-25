import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import {
  HttpError,
  INVALID_USER_ID,
  NOT_FOUNDED,
  SUCCESSFUL_OPERATION,
} from '../errors';
import { IBoardRequest } from '../interfaces';

export class BoardsController {
  static async createBoard(
    { params: { userId }, body }: Request,
    response: Response
  ) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        userId,
        { $push: { boards: body } },
        { new: true, runValidators: true }
      );

      if (!user) {
        throw new HttpError(NOT_FOUNDED, 404);
      }

      response.status(200).json({
        message: SUCCESSFUL_OPERATION,
        status: 200,
        data: user.boards,
      });
    } catch (error: any) {
      response.status(error.code).json(error);
    }
  }
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
