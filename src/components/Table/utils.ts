import React from 'react'
import { Customer } from '../../context/Customers/types'
import { ProductCustom } from '../../context/Products/types'

export const isProduct = (obj: any): obj is ProductCustom => {
  return (
    obj &&
    (typeof obj.Produto === 'string' || React.isValidElement(obj.Produto)) &&
    typeof obj.ID === 'number' &&
    (obj.Percentual === undefined || typeof obj.Percentual === 'string') &&
    (obj.Qtd === undefined || typeof obj.Qtd === 'number') &&
    (obj.Status === undefined || React.isValidElement(obj.Status))
  )
}

export const isCustomer = (obj: any): obj is Customer => {
  return (
    obj &&
    React.isValidElement(obj.Cliente) &&
    typeof obj.ID === 'number' &&
    (obj.Percentual === undefined || typeof obj.Percentual === 'string') &&
    (obj.Qtd === undefined || typeof obj.Qtd === 'number')
  )
}
