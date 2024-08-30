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
  const [customersClient, setCustomersClient] = useState<ICustomer | null>(null)

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await Api.get<ICustomer[]>('customers')
        const result = response.data
        setCustomersList(result)
        console.log(
          'Clientes carregados:',
          result.filter((x) => x !== null),
        )

        // console.log('Clientes carregados:', result)
      } catch (error) {
        console.error('Erro ao buscar clientes:', error)
      }
    }

    fetchCustomers()
  }, [])

  const getCustomerId = (data: ICustomer) => {
    console.log('aqui esta o data', data)

    if (data) {
      setCustomersClient(null)
      setCustomersClient(() => data)
      console.log('Cliente atualizado:', data)
    } else {
      console.log('Cliente não encontrado')
    }
  }

  // useEffect para monitorar mudanças no estado customerProducts
  useEffect(() => {
    console.log('aqui esta o customersClient', customersClient)
  }, [customersClient])

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
