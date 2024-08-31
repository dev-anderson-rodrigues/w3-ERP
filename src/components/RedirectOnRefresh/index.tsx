import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useProduct } from '../../context/Products/useProducts'

const RedirectOnRefresh: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { customerProducts } = useProduct()
  const isProductPage = location.pathname.startsWith(`/dashboard/product/`)
  const isPredictionsPage = location.pathname.startsWith(
    `/dashboard/Predictions/`,
  )

  //ESTE COMPONENTE FOI CRIADO PARA QUE CASO O USUARIO DE UM F5 NA PAGINA NO MEIO DE UMA AÇÃO EM UMA SUBPAGINA ELE SEJA REDIRECIONADO PARA A PAGINA HOME POIS OS DADOS FORAM PERDIDOS.

  useEffect(() => {
    if (isProductPage || isPredictionsPage) {
      if (customerProducts === null) {
        navigate('/dashboard')
      }
    }
  }, [location.pathname, navigate])

  return null // Não renderiza nada, apenas realiza o redirecionamento
}

export default RedirectOnRefresh
