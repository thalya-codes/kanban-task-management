export interface IUser {
  name: string;
  email: string;
  password: string;
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
