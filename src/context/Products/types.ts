import { Dispatch, SetStateAction } from 'react'

export interface IProduct {
  id?: string | number
  percentage?: number | undefined
  amount?: number
  name?: string
  lastPurchased?: string
  nextPurchased?: string
}

export interface IProductContext {
  products: IProduct[] | undefined
  setProduct: Dispatch<SetStateAction<IProduct[]>>
  getProductId: (data: IProduct) => void
  customerProducts: IProduct[] | undefined
}
