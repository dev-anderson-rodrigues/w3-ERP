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
import { useRef } from 'react'

const PredictionById = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const productRef = useRef(tomorrow)
  const { customersClient } = useCustomer()
  const { products, setProduct } = useProduct()

  const sortedProducts = products
    ? [...products].sort((a, b) => {
        const dateA = new Date(a.lastPurchase!) // Converte para Date
        const dateB = new Date(b.lastPurchase!) // Converte para Date

        return productRef.current === tomorrow
          ? dateA.getTime() - dateB.getTime() // Usa getTime() para subtrair timestamps
          : dateB.getTime() - dateA.getTime()
      })
    : []

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
        onClick={() =>
          setProduct(products!.filter((product) => product.id !== item.id))
        }
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
          <h4>{customersClient?.Cliente}</h4>
          <div className="containerContact">
            <div className="containerCall">
              <img src={iconPhone} />
              <p>{customersClient?.Phone}</p>
            </div>
            <div className="containerEmail">
              <img src={iconEmail} />
              <p>{customersClient?.Email}</p>
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
