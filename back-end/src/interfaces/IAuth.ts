import { Response } from 'express';

export interface IGenerateJWTPayload {
  _id: string;
}

export interface IVerifyTokens {
  token: string;
  response: Response;
  errorMsg?: string;
}
