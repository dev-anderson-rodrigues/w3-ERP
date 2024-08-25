import { createContext, useEffect, useState } from 'react'
import { ICustomer, ICustomersContext } from './types'
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
  const [customersClient, setCustomersClient] = useState<ICustomer | undefined>(
    undefined,
  )

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await Api.get<ICustomer[]>('customers')
        const result = response.data
        setCustomersList(result)

        // console.log('Clientes carregados:', result)
      } catch (error) {
        console.error('Erro ao buscar clientes:', error)
      }
    }

    fetchCustomers()
  }, [])

  const getCustomerId = (id: string) => {
    const customer = customersList!.find((c) => c.id)
    setCustomersClient(() => customer)
  }
  return (
    <CustomersContext.Provider
      value={{
        customersList,
        getCustomerId,
        customersClient,
        setCustomersClient,
        setCustomersList,
      }}
    >
      {children}
    </CustomersContext.Provider>
  )
}
