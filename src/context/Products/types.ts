import { Dispatch, SetStateAction } from 'react'

export interface IProduct extends ProductCustom {
  id: string | number
  percentage: number | undefined
  amount: number
  name: string
  lastPurchase: string
  nextPurchase: string
}

export type ProductCustom = {
  ID: string
  Produto: string
  Status?: string
  Percentual?: number
  Qtd?: number
}
export interface IProductContext {
  products: IProduct[] | undefined
  setProduct: Dispatch<SetStateAction<IProduct[]>>
  getProductId: (data: ProductCustom) => void
  setCustomerProducts: Dispatch<SetStateAction<IProduct | null>>
  customerProducts: IProduct | null
}
