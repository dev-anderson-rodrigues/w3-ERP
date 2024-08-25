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
  const [customerProducts, setCustomerProducts] = useState<
    IProduct[] | undefined
  >(undefined)

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
  useEffect(() => {
    console.log('Produtos carregados:', products)
  }, [products]) // Este useEffect será chamado toda vez que o estado de `products` mudar

  const getProductId = (data: IProduct) => {
    // console.log('aqui esta o data', data)
    // console.log(products)
    // products
    // Filtra o produto pelo id do produto passado
    // Se existir, retorna esse produto, caso contrário, retorna undefined
    console.log('aqui esta o data', data)
    if (products) {
      const product = products.filter((p) => p.id === data.id)
      console.log('aquii esta a função getProductId', product)
    }
  }

  // console.log('AQUII ESTA O ESTADO DO GET BY ID PRODUTOS' + customerProducts)
  return (
    <ProductsContext.Provider
      value={{ products, setProduct, getProductId, customerProducts }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
