'use client';

import { IAuthContextValue, IAuthProviderProps } from '@/interface/auth';
import { IUser } from '@/interface/user';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

const AuthContext = createContext<IAuthContextValue | undefined>(undefined);
export function AuthProvider({ children, initialUser }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(initialUser);

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser, user]);

  const setDataUser = (u: IUser | null) => {
    console.log(u)
    setUser(u)
  }
  return (
    <AuthContext.Provider value={{ user, setUser, setDataUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth phải được dùng trong AuthProvider');
  }
  return ctx;
}

