export type IUserBaseInfos<T = {}> = Record<'email' | 'password', string> & T;

interface IUserBoards {
  _id: string;
  name: string;
  columns: [
    {
      _id: string;
      name: string;
      color: string;
      tasks: [
        {
          _id: string;
          name: string;
          description?: string;
          subTasks: [{ _id: string; name: string; description?: string }];
        }
      ];
    }
  ];
}

export interface IUser extends IUserBaseInfos {
  _id?: string;
  name: string;
  boards?: IUserBoards[]
}
