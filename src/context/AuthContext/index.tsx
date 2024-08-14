import React, { createContext, useEffect, useState } from "react";
import { IAuthContext, IUser, IAuthUser } from "./types";
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

  const login = async (payload: IAuthUser) => {
    console.log(payload);
    const user = await apiLogin(payload);
    console.log()

   
    setUser(user);
    setDadosProfileLocalStorage(user);
    setIsAuthenticated(true);

    return user;
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