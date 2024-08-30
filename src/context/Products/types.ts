import { Dispatch, SetStateAction } from 'react'

export interface IProduct {
  id: string | number
  ID?: string
  percentage: number | undefined
  amount: number
  name: string
  Produto?: string
  lastPurchase: string
  nextPurchase: string
}

export interface IProductContext {
  products: IProduct[] | undefined
  setProduct: Dispatch<SetStateAction<IProduct[]>>
  getProductId: (data: IProduct) => void
  setCustomerProducts: Dispatch<SetStateAction<IProduct | null>>
  customerProducts: IProduct | null
}
