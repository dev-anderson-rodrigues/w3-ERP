import React, { createContext, useEffect, useState } from 'react'
import { IAuthContext, IUser, IAuthUser } from './types'
import {
  login as apiLogin,
  getDadosProfileLocalStorage,
  setDadosProfileLocalStorage,
  setRemoveProfileLocalStorage,
} from './utils'

export const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)
  const [showLogoutMenu, setShowLogoutMenu] = useState(false)

  useEffect(() => {
    const user = getDadosProfileLocalStorage()
    console.log(user)
    if (user) {
      setUser(() => user)
      setIsAuthenticated(true)
      setRememberMe(true)
    }
  }, [])

  const login = async (payload: IAuthUser) => {
    const user = await apiLogin(payload)
    setUser(user)
    setDadosProfileLocalStorage(user)
    setIsAuthenticated(() => true)

    return user
  }

  const logout = async () => {
    if (rememberMe === false) {
      setRemoveProfileLocalStorage()
    }
    setUser(null)
    setIsAuthenticated(false)
    setShowLogoutMenu(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        rememberMe,
        setRememberMe,
        setShowLogoutMenu,
        showLogoutMenu,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
