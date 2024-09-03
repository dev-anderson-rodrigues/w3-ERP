import { createContext, useEffect, useState } from 'react'
import { Customer, ICustomer, ICustomersContext } from './types'
import { Api } from '../../services/api'

export const CustomersContext = createContext<ICustomersContext | undefined>(
  undefined,
)
export const CustomerProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [customersList, setCustomersList] = useState<ICustomer[]>([])
  const [customersClient, setCustomersClient] = useState<ICustomer | null>(null)

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await Api.get<ICustomer[]>('customers')
        const result = response.data
        setCustomersList(result)
      } catch (error) {
        console.error('Erro ao buscar clientes:', error)
      }
    }

    fetchCustomers()
  }, [])
  return (
    <CustomersContext.Provider
      value={{
        customersList,
        getCustomerId: () => {},
        customersClient,
        setCustomersClient,
        setCustomersList,
      }}
    >
      {children}
    </CustomersContext.Provider>
  )
}
