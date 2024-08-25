import { Dispatch, SetStateAction } from 'react'

export interface ICustomer {
  id: string
  percentage: number
  name: string
}
export interface ICustomersContext {
  customersList: ICustomer[]
  setCustomersList: Dispatch<SetStateAction<ICustomer[]>>
  setCustomersClient: Dispatch<SetStateAction<ICustomer | undefined>>
  getCustomerId: (data: string) => void
  customersClient: ICustomer | undefined
}
