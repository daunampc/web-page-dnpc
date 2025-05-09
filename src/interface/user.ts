export interface IUser {
  id: number | string;
  sub: string;
  user_id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date;
}
