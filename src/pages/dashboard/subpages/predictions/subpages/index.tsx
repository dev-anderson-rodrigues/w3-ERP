import NameTable from '../../../../../components/Name_Table'
import { useCustomer } from '../../../../../context/Customers/useCustomer'
import { AppContainer } from './styles'
import iconleftSmall from '../../../../../assets/icons/left-small.png'
import iconPhone from '../../../../../assets/icons/phone-telephone.png'
import iconEmail from '../../../../../assets/icons/mail.png'
import TableComponent from '../../../../../components/Table'
import { useProduct } from '../../../../../context/Products/useProducts'
import iconHistory from '../../../../../assets/icons/history.png'
import icon_Out_of_stock from '../../../../../assets/icons/facial.png'
import iconOutProduct from '../../../../../assets/icons/check-one.png'
import imgOutHoverProduct from '../../../../../assets/icons/Group 37.png'
import { toast } from 'react-toastify'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

const PredictionById = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const productRef = useRef(tomorrow)
  const { customersClient, customersList, setCustomersClient } = useCustomer()
  const { products, setProduct } = useProduct()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id && customersList!.length > 0) {
      const customer = customersList!.find((customer) => customer.id == id)
      if (customer) {
        setCustomersClient(customer)
      }
    }
  }, [id, customersList])

  const sortedProducts = products
    ? [...products].sort((a, b) => {
        const dateA = new Date(a.lastPurchase!)
        const dateB = new Date(b.lastPurchase!)

        return productRef.current === tomorrow
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime()
      })
    : []

  const handleOutOfStock = (itemId: any) => {
    setProduct(products!.filter((product) => product.id !== itemId))
    toast.info('Baixa realizada com sucesso')
  }
  const productTableData = sortedProducts.slice(0, 10).map((item) => ({
    ID: item.id,
    Produto: <div className="columnNameTable">{item.name}</div>,
    'Última compra': item.lastPurchase
      ? new Date(item.lastPurchase).toLocaleDateString('pt-BR')
      : 'N/A',
    Qtd: item.amount,
    'Dar baixa': (
      <img
        src={iconOutProduct}
        className="imgOutProduct"
        onClick={() => handleOutOfStock(item.id)}
      />
    ),
  }))

  const sortedProductsByQty = products
    ? [...products].sort((a, b) => a.amount - b.amount)
    : []

  const productTableDataByQty = sortedProductsByQty
    .slice(0, 10)
    .map((item) => ({
      ID: item.id,
      Produto: <div className="columnNameTable">{item.name}</div>,
      'Última compra': item.lastPurchase
        ? new Date(item.lastPurchase).toLocaleDateString('pt-BR')
        : 'N/A',
      Qtd: item.amount,
      'Dar baixa': (
        <div className="product-hover-container">
          <img src={iconOutProduct} />
          <div className="hover-message">
            <div className="tooltip">Dar baixa</div>
          </div>
        </div>
      ),
    }))
  return (
    <AppContainer>
      <div className="containerTitle">
        <div className="titlePage">
          <NameTable
            img={iconleftSmall}
            text="Predição"
            link="/dashboard/Predictions"
          />
        </div>
      </div>
      <div className="containerBlue">
        <div className="titleClient">
          <h4>{customersClient?.name}</h4>
          <div className="containerContact">
            <div className="containerCall">
              <img src={iconPhone} />
              <p>{customersClient?.phone}</p>
            </div>
            <div className="containerEmail">
              <img src={iconEmail} />
              <p>{customersClient?.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tables">
        <div className="tableHistory">
          <div className="titleNameTable_1">
            <NameTable img={iconHistory} text="Histórico" />
          </div>
          <TableComponent
            columns={[
              { header: 'ID' },
              { header: 'Produto' },
              { header: 'Última compra' },
              { header: 'Qtd' },
              { header: 'Dar baixa' },
            ]}
            data={productTableData}
          />
        </div>
        <div className="tableOut_of_stock">
          <div className="titleNameTable_2">
            <NameTable img={icon_Out_of_stock} text="Produtos esgotando" />
          </div>
          <TableComponent
            columns={[
              { header: 'ID' },
              { header: 'Produto' },
              { header: 'Última compra' },
              { header: 'Qtd' },
              { header: 'Dar baixa' },
            ]}
            data={productTableDataByQty}
          />
          <img src={imgOutHoverProduct} style={{ display: 'none' }} />
        </div>
      </div>
    </AppContainer>
  )
}

export default PredictionById
