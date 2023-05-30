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
  role: UserRole;
  probation: boolean
};

