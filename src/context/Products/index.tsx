import { createContext, useEffect, useState } from 'react'
import { IProduct, IProductContext } from './types'
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
  const [customerProducts, setCustomerProducts] = useState<IProduct | null>(
    null,
  )

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

  const getProductId = (data: IProduct) => {
    console.log('aqui esta o data', data)

    if (data) {
      setCustomerProducts(() => data)
      console.log('Produto atualizado:', data)
    } else {
      console.log('Produto não encontrado')
    }
  }

  // useEffect para monitorar mudanças no estado customerProducts
  useEffect(() => {
    console.log('aqui esta o customerProducts', customerProducts)
  }, [customerProducts])

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
