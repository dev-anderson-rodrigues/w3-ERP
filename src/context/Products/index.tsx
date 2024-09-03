import { createContext, useEffect, useState } from 'react'
import { IProduct, IProductContext, ProductCustom } from './types'
import { Api } from '../../services/api'
import { useParams } from 'react-router-dom'

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
  const { id } = useParams<{ id: string }>()

  console.log(id)
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

  // useEffect(() => {
  //   if (ID) {
  //     console.log('ID capturado:', ID)
  //     // getProductId(id) // Chama a função do contexto para buscar o produto
  //   }
  // }, [ID])

  // useEffect(() => {
  //   if (id && products.length > 0) {
  //     // Filtra o produto baseado no ID da URL
  //     console.log(id)
  //     const product = products.find((product) => product.id === id)
  //     if (product) {
  //       setCustomerProducts(product) // Atualiza o estado com o produto filtrado
  //     } else {
  //       console.log('Produto não encontrado')
  //       setCustomerProducts(null) // Reseta o estado se o produto não for encontrado
  //     }
  //   }
  // }, [id, products]) // Executa sempre que o ID ou os produtos mudarem
  // const getProductId = (ID: String) => {
  //   // if (data) {
  //   //   setCustomerProducts(null)
  //   //   setCustomerProducts(() => data)
  //   // } else {
  //   //   console.log('Produto não encontrado')
  //   // }
  //   const product = products.filter((product) => product.id === ID)
  //   if (product) {
  //     setCustomerProducts(product)
  //   } else {
  //     console.log('Produto não encontrado')
  //   }
  // }

  // useEffect para monitorar mudanças no estado customerProducts
  // useEffect(() => {}, [customerProducts])

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductId: () => {},
        setCustomerProducts,
        setProduct,
        customerProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
