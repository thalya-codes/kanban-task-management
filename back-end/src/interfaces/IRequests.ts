import { Request } from 'express';
import { IUserBaseInfos } from './IUser';

export interface IUserRequest<T = ''> extends Request {
 body: IUserBaseInfos & T;
}

export interface IBoardRequest extends Request {
 params: {
  userId: string;
 };
}
