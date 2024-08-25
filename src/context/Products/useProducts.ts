import { useContext } from 'react'
import { ProductsContext } from '.'

export const useProduct = () => {
  // Implement your custom logic here
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return context
}
