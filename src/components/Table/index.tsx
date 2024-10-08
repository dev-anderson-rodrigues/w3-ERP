import { useLocation, useNavigate } from 'react-router-dom'
import { Table, TableWrapper } from './styles'
import { TableProps } from './types'
import { isCustomer, isProduct } from './utils'
import iconRightSmall from '../../assets/icons/right-small.png'

const TableComponent = ({ columns, data }: TableProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClickFilter = (obj: { [key: string]: any }) => {
    if (isProduct(obj)) {
      if (location.pathname === '/dashboard/products') {
        navigate(`/dashboard/product/${obj.ID}`)
      } else {
        navigate(`product/${obj.ID}`)
      }
    } else if (isCustomer(obj)) {
      navigate(`client/${obj.ID}`)
    } else {
      console.log('Objeto não identificado:', obj)
    }
  }

  const shouldHandleClick =
    location.pathname === '/dashboard' ||
    location.pathname === '/dashboard/products'
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={column.className}>
                {column.header}
              </th>
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
                  {row[col.header] !== undefined ? row[col.header] : 'N/A'}
                </td>
              ))}
              {shouldHandleClick && (
                <td>
                  <span className="badge">
                    <img src={iconRightSmall} alt="Right Icon" />
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

export default TableComponent
