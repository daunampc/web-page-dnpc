import { IUser } from "./user";

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IAuthContextValue {
  user: IUser | null;
  setUser: (u: IUser | null) => void;
  setDataUser: (u: IUser | null) => void;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
  initialUser: IUser | null;
}
