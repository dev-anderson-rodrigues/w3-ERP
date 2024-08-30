import { ICustomer } from '../../../../context/Customers/types'

export const isCustomer = (obj: any): obj is ICustomer => {
  return (
    obj &&
    'ID' in obj &&
    'Cliente' in obj &&
    'Percentual' in obj &&
    'Qtd' in obj &&
    'Phone' in obj &&
    'Email' in obj
  )
}
