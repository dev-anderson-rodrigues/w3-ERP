import { ICustomer } from '../../context/Customers/types'
import { IProduct } from '../../context/Products/types'

export const isProduct = (obj: any): obj is IProduct => {
  return (
    obj &&
    'ID' in obj &&
    'Percentual' in obj &&
    'Produto' in obj &&
    'Qtd' in obj
  )
}

export const isCustomer = (obj: any): obj is ICustomer => {
  return (
    obj &&
    'ID' in obj &&
    'Cliente' in obj &&
    'Percentual' in obj &&
    'Qtd' in obj
  )
}
