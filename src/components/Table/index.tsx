import { useLocation, useNavigate } from 'react-router-dom'
import { useCustomer } from '../../context/Customers/useCustomer'
import { useProduct } from '../../context/Products/useProducts'
import { Table, TableWrapper } from './styles'
import { TableProps } from './types'
import { isCustomer, isProduct } from './utils'
import iconRightSmall from '../../assets/icons/right-small.png'

const TableComponent = ({ columns, data }: TableProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { getProductId } = useProduct()
  const { getCustomerId } = useCustomer()

  const handleClickFilter = (obj: { [key: string]: any }) => {
    if (isProduct(obj)) {
      getProductId(obj)
      navigate(`product/${obj.ID}`)
    } else if (isCustomer(obj)) {
      getCustomerId(obj)
      navigate(`client/${obj.ID}`)
    } else {
      console.log('Objeto não identificado:', obj)
    }
  }

  const shouldHandleClick = location.pathname === '/dashboard'
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              onClick={
                shouldHandleClick ? () => handleClickFilter(row) : undefined
              }
            >
              {columns.map((col, j) => (
                <td
                  key={j}
                  style={{ cursor: shouldHandleClick ? 'pointer' : 'default' }}
                >
                  {row[col] !== undefined ? row[col] : 'N/A'}
                </td>
              ))}
              {shouldHandleClick && (
                <span className="badge">
                  <img src={iconRightSmall} alt="" />
                </span>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

export default TableComponent
