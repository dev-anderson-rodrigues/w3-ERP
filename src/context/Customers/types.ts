import { Dispatch, SetStateAction } from 'react'

export interface ICustomer extends Customer {
  id: string | number
  percentage: number
  amount: number
  name: string
  phone: number
  email: string
}
export type Customer = {
  ID: string | number
  Percentual?: number
  Cliente: string
  Qtd?: number
  Phone?: string
  Email?: string
}
export interface ICustomersContext {
  customersList: ICustomer[]
  setCustomersList: Dispatch<SetStateAction<ICustomer[]>>
  setCustomersClient: Dispatch<SetStateAction<ICustomer | null>>
  // getCustomerId: (data: Customer) => void
  customersClient: ICustomer | null
}
