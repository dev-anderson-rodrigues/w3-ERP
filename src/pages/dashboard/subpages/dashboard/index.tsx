import CardsGraphic from '../../../../components/Cards_graphic'
import FilterBar from '../../../../components/Filter_Button'
import TableComponent from '../../../../components/Table'
import icon1 from '../../../../assets/icons/Vector3.png'
import icon2 from '../../../../assets/icons/every-user.png'
import imgCalendary from '../../../../assets/icons/data.png'
import { ContainerBlue, ContainerTables } from './styles'
import NameTable from '../../../../components/Name_Table'
import { useProduct } from '../../../../context/Products/useProducts'
import { useCustomer } from '../../../../context/Customers/useCustomer'
import { useState } from 'react'
const TemplateDashboard = () => {
  const [productFilter, setProductFilter] = useState<'alta' | 'baixa'>('alta')
  const [customerFilter, setCustomerFilter] = useState<'alta' | 'baixa'>(
    'baixa',
  )

  const { products } = useProduct()
  const { customersList } = useCustomer()

  const formatPercentage = (percentage: number | undefined) => {
    if (typeof percentage === 'number' && !isNaN(percentage)) {
      percentage = percentage * 100
      return `${percentage.toFixed(2)}%`
    }
    return '0.00%'
  }

  // Garantir que products e customers são arrays antes de usar
  const sortedProducts = products
    ? [...products].sort((a, b) => {
        return productFilter === 'alta'
          ? b.percentage! - a.percentage!
          : a.percentage! - b.percentage!
      })
    : []

  const sortedCustomers = customersList
    ? [...customersList].sort((a, b) => {
        return customerFilter === 'alta'
          ? b.percentage! - a.percentage!
          : a.percentage! - b.percentage!
      })
    : []

  const productTableData = sortedProducts.slice(0, 11).map((item) => ({
    ID: item.id,
    Produto: item.name,
    Percentual: formatPercentage(item.percentage),
    Qtd: item.amount,
  }))
  const customerTableData = sortedCustomers.slice(0, 11).map((item) => ({
    ID: item.id,
    Cliente: item.name,
    Percentual: formatPercentage(item.percentage),
    Qtd: item.amount,
  }))
  return (
    <div>
      <ContainerBlue>
        <div className="content_top">
          <h4>Dashboard</h4>
          <img src={imgCalendary} alt="Calendário" />
        </div>
        <div className="container_cards">
          <CardsGraphic
            text="Total produtos em alta"
            percentageGraphic={80}
            value={120}
            percentage={13}
          />
          <CardsGraphic
            text="Total produtos em baixa"
            percentageGraphic={20}
            value={56}
            percentage={-29}
          />
          <CardsGraphic
            text="Total clientes em alta"
            percentageGraphic={72}
            value={501}
            percentage={25}
          />
          <CardsGraphic
            text="Total clientes em baixa"
            percentageGraphic={28}
            value={102}
            percentage={-15}
          />
        </div>
      </ContainerBlue>
      <ContainerTables>
        <div className="table">
          <div className="name_and_filter">
            <NameTable text="Produtos" img={icon1} />
            <FilterBar
              initialState={productFilter}
              onFilterChange={setProductFilter}
            />
          </div>
          <TableComponent
            columns={['ID', 'Produto', 'Percentual']}
            data={productTableData}
          />
        </div>
        <div className="table">
          <div className="name_and_filter2">
            <NameTable text="Clientes" img={icon2} />
            <FilterBar
              initialState={customerFilter}
              onFilterChange={setCustomerFilter}
            />
          </div>
          <TableComponent
            columns={['ID', 'Cliente', 'Percentual']}
            data={customerTableData}
          />
        </div>
      </ContainerTables>
    </div>
  )
}

export default TemplateDashboard
