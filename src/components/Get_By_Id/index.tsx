// import { useCustomer } from '../../context/Customers/useCustomer'
import { useProduct } from '../../context/Products/useProducts'
import CardsGraphic from '../Cards_graphic'
import { useCustomer } from '../../context/Customers/useCustomer'
import { Link, useLocation } from 'react-router-dom'
import imgSeta from '../../assets/icons/left-small.png'
import { Container, ContainerTables } from './styles'
import NameTable from '../Name_Table'
import TableComponent from '../Table'
import icon1 from '../../assets/icons/trending-down.png'
import Icon2 from '../../assets/icons/trending-up.png'
import { useSortAndFormat } from './utils'

const GetById = () => {
  const { products, customerProducts } = useProduct()
  const { customersList, customersClient } = useCustomer()
  const location = useLocation()
  const isProductPage = location.pathname.startsWith(`/dashboard/product/`)
  const isClientPage = location.pathname.startsWith(`/dashboard/client/`)

  const { sortedCustomers, sortedProducts, formatPercentage } =
    useSortAndFormat()

  const customerTableLow = sortedCustomers(customersList, 'baixa')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Cliente: item.name,
      Percentual: formatPercentage(item.percentage),
      Qtd: item.amount !== undefined ? item.amount : 'N/A', // Verificação para 'undefined'
    }))

  const customerTableHigh = sortedCustomers(customersList, 'alta')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Cliente: item.name,
      Percentual: formatPercentage(item.percentage),
      Qtd: item.amount !== undefined ? item.amount : 'N/A',
    }))

  const productTableLow = sortedProducts(products, 'baixa')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Produto: item.name,
      Percentual: formatPercentage(item.percentage),
      Qtd: item.amount !== undefined ? item.amount : 'N/A',
    }))

  const productTableHigh = sortedProducts(products, 'alta')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Produto: item.name,
      Percentual: formatPercentage(item.percentage),
      Qtd: item.amount !== undefined ? item.amount : 'N/A',
    }))
  return (
    <Container>
      <div className="container_detail">
        <Link to="/dashboard">
          <div className="img">
            <img src={imgSeta} alt="Voltar" />
          </div>
        </Link>
        <h4>Detalhamento</h4>
      </div>
      <h3>
        {isProductPage && customerProducts?.Produto}
        {isClientPage && customersClient?.Cliente}
      </h3>

      <div className="container_cards">
        <CardsGraphic text="Média 120 dias" value={300} />
        <CardsGraphic
          text="Últimos 30 dias"
          value={222}
          percentage={26}
          className="cards"
          classNamePropText="classNamePropText"
          classNamePropValue="classNamePropValue"
        />
        <CardsGraphic
          text="Últimos 60 dias"
          value={350}
          className="cards"
          classNamePropText="classNamePropText"
          classNamePropValue="classNamePropValue"
        />
        <CardsGraphic
          text="Últimos 90 dias"
          value={320}
          className="cards"
          classNamePropText="classNamePropText"
          classNamePropValue="classNamePropValue"
        />
        <CardsGraphic
          text="Últimos 120 dias"
          value={280}
          className="cards"
          classNamePropText="classNamePropText"
          classNamePropValue="classNamePropValue"
        />
      </div>

      <ContainerTables>
        {isProductPage && (
          <>
            <div className="table">
              <div className="name_and_filter">
                <NameTable text="Clientes em baixa" img={icon1} />
              </div>
              <TableComponent
                columns={['ID', 'Cliente', 'Percentual', 'Qtd']}
                data={customerTableLow}
              />
            </div>
            <div className="table">
              <div className="name_and_filter2">
                <NameTable text="Clientes em alta" img={Icon2} />
              </div>
              <TableComponent
                columns={['ID', 'Cliente', 'Percentual', 'Qtd']}
                data={customerTableHigh}
              />
            </div>
          </>
        )}

        {isClientPage && (
          <>
            <div className="table">
              <div className="name_and_filter">
                <NameTable text="Produtos em baixa" img={icon1} />
              </div>
              <TableComponent
                columns={['ID', 'Produto', 'Percentual', 'Qtd']}
                data={productTableLow}
              />
            </div>
            <div className="table">
              <div className="name_and_filter2">
                <NameTable text="Produtos em alta" img={Icon2} />
              </div>
              <TableComponent
                columns={['ID', 'Produto', 'Percentual', 'Qtd']}
                data={productTableHigh}
              />
            </div>
          </>
        )}
      </ContainerTables>
    </Container>
  )
}

export default GetById
