import InputFilter from '../../../../components/InputFilter'
import { AppContainer } from './styles'
import iconFilter from '../../../../assets/icons/filter.png'
import TableComponent from '../../../../components/Table'
import { useProduct } from '../../../../context/Products/useProducts'
import { useRef } from 'react'

const ProductsPage = () => {
  const productRef = useRef(0)
  const { products } = useProduct()
  const formatPercentage = (percentage: number | undefined) => {
    if (typeof percentage === 'number' && !isNaN(percentage)) {
      const formattedPercentage = percentage * 100
      return {
        formatted: `${formattedPercentage.toFixed(2)}%`,
        value: formattedPercentage,
      }
    }
    return { formatted: '0.00%', value: 0 }
  }

  const sortedProducts = products
    ? [...products].sort((a, b) => {
        const idA = Number(a.id)
        const idB = Number(b.id)

        return productRef.current === 0 ? idA - idB : idB - idA
      })
    : []
  const productTableData = sortedProducts.slice(0, 10).map((item) => {
    const { formatted, value } = formatPercentage(item.percentage)

    return {
      ID: item.id,
      Produto: <div className="columnNameTable">{item.name}</div>,
      Status:
        value > 0 ? (
          <span className="status_high">Em alta</span>
        ) : (
          <span className="status_low">Em baixa</span>
        ),
      Percentual: formatted,
    }
  })

  return (
    <AppContainer>
      <h4 className="TitlePage">Produtos</h4>

      <div className="filter">
        <InputFilter />
        <div className="iconPageProducts">
          <img src={iconFilter} />
        </div>
      </div>

      <TableComponent
        columns={[
          { header: 'ID', className: 'id_column' },
          { header: 'Produto', className: 'produto-column' },
          { header: 'Status' },
          { header: 'Percentual' },
        ]}
        data={productTableData}
      />
    </AppContainer>
  )
}

export default ProductsPage
