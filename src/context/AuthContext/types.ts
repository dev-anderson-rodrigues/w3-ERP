/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react'
export interface IUser {
  id: number
  user: string
  password: string
}
export interface IAuthUser {
  user: string
  password: string
}
export interface IAuthContext {
  user: IUser | null
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  setUser: Dispatch<SetStateAction<IUser | null>>
  login: (payload: IAuthUser) => Promise<IUser | null>
  logout: () => void
  rememberMe: boolean
  setRememberMe: Dispatch<SetStateAction<boolean>>
}
