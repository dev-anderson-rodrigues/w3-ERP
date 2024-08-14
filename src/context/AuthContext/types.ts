/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export type loginType = {
    email?: string;
    password?: string;
  };
  export type createUserType = {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  };
  export interface IUser {
    avatar?: string;
    email?: string;
    password?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    id?: number;
  }
  
  export interface IAuthContext {
    user: IUser | null;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    setUser: Dispatch<SetStateAction<IUser | null>>;
    login: (payload: loginType) => Promise<void>;
    logout: () => void;
  }