import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './';
import { NOT_AUTHORIZATED } from '../../errors';
import { RevokedTokensModel } from '../../models';

export const verifyAuthorization = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: NOT_AUTHORIZATED });
  }

  try {
    const decodedInfos = verifyToken({ token, response });

    if (!decodedInfos) return;

    const {
      payload: { _id },
    } = decodedInfos as any;

    const userWithRevokedTokens = await RevokedTokensModel.findOne({
      userId: _id,
    });

    if (!userWithRevokedTokens) {
      next();
      return;
    }

    const informedTokenWasRevoked = userWithRevokedTokens.tokens.some(
      ({ value }) => value === token
    );

    if (informedTokenWasRevoked) {
      return response.status(401).json({ message: NOT_AUTHORIZATED });
    }

    next();
  } catch (error) {
    response.status(401).json({ message: NOT_AUTHORIZATED });
  }
};
