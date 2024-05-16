export type IUserBaseInfos<T = {}> = Record<'email' | 'password', string> & T;
export interface IUser extends IUserBaseInfos {
 _id?: string;
 name: string;
 boards?: {
  [key: string]: {
   id: string;
   title: string;
   tasks?: [
    {
     id: string;
     title: string;
     description?: string;
     subTasks?: {
      type: [{ id: string; text: string; isCompleted: Boolean }];
     };
    }
   ];
  };
 };
}
