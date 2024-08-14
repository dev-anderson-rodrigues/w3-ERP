import React, { createContext, useEffect, useState } from "react";
import { IAuthContext, IUser, loginType } from "./types";
import {
  login as apiLogin,
  getDadosProfileLocalStorage,
  setDadosProfileLocalStorage,
} from "./utils";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const user = getDadosProfileLocalStorage();
    if (user) {
      setUser(user);
    }
  }, []);

  const login = async (payload: loginType) => {
    const { id, email, password } = await apiLogin(payload);

    if(!email || !password){
        throw new Error('Email ou senha inválidos, tente novamente ou crie uma nova conta!');
    }
    setUser({ ...payload, id});
    setDadosProfileLocalStorage({ ...payload });
    setIsAuthenticated(true);

    return name;
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(() => false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};