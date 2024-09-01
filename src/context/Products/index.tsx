import { createContext, useEffect, useState } from 'react'
import { IProduct, IProductContext, ProductCustom } from './types'
import { Api } from '../../services/api'

export const ProductsContext = createContext<IProductContext>(
  {} as IProductContext,
)

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [products, setProduct] = useState<IProduct[]>([])
  const [customerProducts, setCustomerProducts] =
    useState<ProductCustom | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Api.get<IProduct[]>('products')
        const result = response.data
        setProduct(result) // result é um array de IProduct, então setProduct espera um array
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    fetchProducts()
  }, [])

  const getProductId = (data: ProductCustom) => {
    if (data) {
      setCustomerProducts(null)
      setCustomerProducts(() => data)
    } else {
      console.log('Produto não encontrado')
    }
  }

  // useEffect para monitorar mudanças no estado customerProducts
  useEffect(() => {}, [customerProducts])

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductId,
        setCustomerProducts,
        setProduct,
        customerProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
