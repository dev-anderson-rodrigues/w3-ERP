import { IProduct } from '../../context/Products/types'

export const formatDate = (date: string | Date): string => {
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0') // Meses são baseados em zero
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

export const sortProductsByNextPurchaseDate = (
  products: IProduct[],
): IProduct[] => {
  return products.sort((a, b) => {
    const dateA = new Date(a.nextPurchase).getTime()
    const dateB = new Date(b.nextPurchase).getTime()
    return dateA - dateB
  })
}
