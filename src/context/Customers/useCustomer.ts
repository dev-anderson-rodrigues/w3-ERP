import { useContext } from 'react'
import { CustomersContext } from '.'

export const useCustomer = () => {
  // Implement your logic here
  const context = useContext(CustomersContext)
  if (!context) {
    throw new Error('useCustomer must be used within a CustomersProvider')
  }
  return context
}
