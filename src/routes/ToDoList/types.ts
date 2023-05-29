export type ITodoItem = { id: string; text: string };

export enum UserRole {
  Admin = "ADMIN",
  Crew = "CREW",
  Manager = "MANAGER"
}

export type IUser = {
  firstName: string;
  lastName: string;
  id: string;
  role: UserRole
};


const newUser: IUser = {
  firstName: 'hsjsj',
  lastName: 'djdkf',
  id: '1',
  role: UserRole.Admin
}
