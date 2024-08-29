import { Dispatch, SetStateAction } from 'react'

export interface ICustomer {
  id: string | number
  percentage: number
  amount: number
  name: string
  Cliente?: string
  phone?: number
  email?: string
}
export interface ICustomersContext {
  customersList: ICustomer[]
  setCustomersList: Dispatch<SetStateAction<ICustomer[]>>
  setCustomersClient: Dispatch<SetStateAction<ICustomer | null>>
  getCustomerId: (data: ICustomer) => void
  customersClient: ICustomer | null
}
