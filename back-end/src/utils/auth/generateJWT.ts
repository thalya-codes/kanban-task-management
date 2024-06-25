import JWT from 'jsonwebtoken';
import { Response } from 'express';
import { IGenerateJWTPayload } from '../../interfaces';
import {
  FAIL_TOKEN_GENERATION,
  HttpError,
  SUCCESSFUL_OPERATION,
} from '../../errors';

export async function generateJWT(
  payload: IGenerateJWTPayload,
  response: Response
) {
  JWT.sign(
    { payload },
    process.env.JWT_SECRET as string,
    { expiresIn: '5d', algorithm: 'HS384' },
    (err: Error | null, token: string | undefined) => {
      if (err) {
        throw new HttpError(FAIL_TOKEN_GENERATION, 500);
      }

      return response
        .status(200)
        .json({ token, message: SUCCESSFUL_OPERATION });
    }
  );
}
