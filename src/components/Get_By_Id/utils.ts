import { IProduct, ICustomer } from './types'

export const useSortAndFormat = () => {
  const formatPercentage = (percentage: number | undefined) => {
    if (typeof percentage === 'number' && !isNaN(percentage)) {
      return `${(percentage * 100).toFixed(2)}%`
    }
    return '0.00%'
  }

  const sortItems = <T extends { percentage?: number }>(
    items: T[],
    filter: 'alta' | 'baixa',
  ) => {
    return [...items].sort((a, b) =>
      filter === 'alta'
        ? (b.percentage || 0) - (a.percentage || 0)
        : (a.percentage || 0) - (b.percentage || 0),
    )
  }

  const sortedProducts = (
    products: IProduct[] | undefined,
    filter: 'alta' | 'baixa',
  ) => {
    return products ? sortItems(products, filter) : []
  }

  const sortedCustomers = (
    customers: ICustomer[] | undefined,
    filter: 'alta' | 'baixa',
  ) => {
    return customers ? sortItems(customers, filter) : []
  }

  return { sortedProducts, sortedCustomers, formatPercentage }
}
