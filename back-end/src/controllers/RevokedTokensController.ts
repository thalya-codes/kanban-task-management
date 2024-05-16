import { Request, Response } from 'express';
import { RevokedTokensModel } from '../models';
import { SUCCESSFUL_OPERATION } from '../errors';
import { verifyToken } from '../utils/auth';

export class RevokedTokensController {
  static async addToRevokedList(request: Request, response: Response) {
    const token = request.headers.authorization as string;
    const decodedInfos = verifyToken({ token, response });

    if (!decodedInfos) return;
    const {
      payload: { _id },
      iat,
      exp,
    } = decodedInfos as any;
    const newToken = {
      iat,
      exp,
      value: token,
    };

    try {
      const userAlreadyHasRevokedTokens =
        await RevokedTokensModel.findOneAndUpdate(
          { userId: _id },
          { $push: { tokens: newToken } },
          { new: true }
        );

      const statusCode = userAlreadyHasRevokedTokens ? 200 : 201;

      if (!userAlreadyHasRevokedTokens) {
        RevokedTokensModel.create({
          userId: _id,
          tokens: [{ iat, exp, value: token }],
        });
      }

      response.status(statusCode).json({ message: SUCCESSFUL_OPERATION });
    } catch (error) {
      response.json({ message: error });
    }
  }
}
