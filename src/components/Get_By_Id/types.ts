export interface ICustomer {
  id: string | number
  percentage: number
  name: string
  Cliente?: string
  phone?: number
  email?: string
  amount: number
}

export interface IProduct {
  id: string | number
  percentage: number | undefined
  amount: number
  name: string
  Produto?: string
  lastPurchased?: string
  nextPurchased?: string
}
