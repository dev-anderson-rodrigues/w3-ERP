// import { useCustomer } from '../../context/Customers/useCustomer'
import { useProduct } from '../../../../context/Products/useProducts'
import CardsGraphic from '../../../../components/Cards_graphic'
import { useCustomer } from '../../../../context/Customers/useCustomer'
import { Link, useLocation, useParams } from 'react-router-dom'
import imgSeta from '../../../../assets/icons/left-small.png'
import { Container, ContainerTables } from './styles'
import NameTable from '../../../../components/Name_Table'
import TableComponent from '../../../../components/Table'
import icon1 from '../../../../assets/icons/trending-down.png'
import Icon2 from '../../../../assets/icons/trending-up.png'
import { useSortAndFormat } from './utils'
import { useEffect } from 'react'

const GetById = () => {
  const { products, customerProducts, setCustomerProducts } = useProduct()
  const { customersList, customersClient, setCustomersClient } = useCustomer()
  const location = useLocation()
  const isProductPage = location.pathname.startsWith(`/dashboard/product/`)
  const isClientPage = location.pathname.startsWith(`/dashboard/client/`)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (
      (id && isProductPage && products!.length > 0) ||
      (id && isClientPage && customersList!.length > 0)
    ) {
      // Filtra o produto baseado no ID da URL
      console.log(id)
      const product = products!.find((product) => product.id == id)
      if (product) {
        setCustomerProducts(product)
      } else {
        console.log('Produto não encontrado')
        setCustomerProducts(null)
      }
      const customer = customersList!.find((customer) => customer.id == id)
      if (customer) {
        setCustomersClient(customer)
      }
    }
  }, [id, products, customersList])

  const { sortedCustomers, sortedProducts, formatPercentage } =
    useSortAndFormat()

  const customerTableLow = sortedCustomers(customersList, 'baixa')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Cliente: <div className="columnNameTable">{item.name}</div>,
      Percentual: formatPercentage(item.percentage),
      Qtd: item.amount !== undefined ? item.amount : 'N/A', // Verificação para 'undefined'
    }))

  const customerTableHigh = sortedCustomers(customersList, 'alta')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Cliente: <div className="columnNameTable">{item.name}</div>,
      Percentual: formatPercentage(item.percentage),
      Qtd: item.amount !== undefined ? item.amount : 'N/A',
    }))

  const productTableLow = sortedProducts(products, 'baixa')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Produto: <div className="columnNameTable">{item.name}</div>,
      Percentual: formatPercentage(item.percentage),
      Qtd: item.amount !== undefined ? item.amount : 'N/A',
    }))

  const productTableHigh = sortedProducts(products, 'alta')
    .slice(0, 5)
    .map((item) => ({
      ID: item.id,
      Produto: <div className="columnNameTable">{item.name}</div>,
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
        {isProductPage && customerProducts?.name}
        {isClientPage && customersClient?.name}
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
                columns={[
                  { header: 'ID', className: 'id_column' },
                  { header: 'Cliente', className: 'client-column' },
                  { header: 'Percentual', className: 'percentege-column' },
                  { header: 'Qtd', className: 'Qtd-column' },
                ]}
                data={customerTableLow}
              />
            </div>
            <div className="table">
              <div className="name_and_filter2">
                <NameTable text="Clientes em alta" img={Icon2} />
              </div>
              <TableComponent
                columns={[
                  { header: 'ID', className: 'id_column' },
                  { header: 'Cliente', className: 'client-column' },
                  { header: 'Percentual', className: 'percentege-column' },
                  { header: 'Qtd', className: 'Qtd-column' },
                ]}
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
                columns={[
                  { header: 'ID' },
                  { header: 'Produto' },
                  { header: 'Percentual' },
                  { header: 'Qtd' },
                ]}
                data={productTableLow}
              />
            </div>
            <div className="table">
              <div className="name_and_filter2">
                <NameTable text="Produtos em alta" img={Icon2} />
              </div>
              <TableComponent
                columns={[
                  { header: 'ID' },
                  { header: 'Produto' },
                  { header: 'Percentual' },
                  { header: 'Qtd' },
                ]}
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
