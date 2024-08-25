import { useRef, useState } from 'react'
import { Table, TableWrapper } from './styles'
import { TableProps } from './types'
import { useProduct } from '../../context/Products/useProducts'
import { useCustomer } from '../../context/Customers/useCustomer'

const TableComponent = ({ columns, data }: TableProps) => {
  const { getProductId } = useProduct()
  const { getCustomerId } = useCustomer()

  // const handleClickFilter = (obj: { [key: string]: any }) => {
  //   // // Verificação explícita de null ou undefined
  //   // console.log(JSON.stringify(obj.Produto))
  //   // const product = JSON.stringify(obj.Produto)
  //   // const Client = JSON.stringify(obj.Cliente)
  //   // if (product) {
  //   // }
  //   getProductId(obj)
  //   // if (Client) {
  //   //   getCustomerId(obj.id)
  //   // }

  //   // console.log('aqui esta o console table', obj)
  // }

  const handleClickFilter = (obj: { [key: string]: any }) => {
    if ('Produto' in obj) {
      // É um produto
      getProductId(obj)
    } else if ('Cliente' in obj) {
      // É um cliente
      // getCustomerId(obj)
    } else {
      console.log('Objeto não identificado:', obj)
    }
  }
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
            <tr key={i} onClick={() => handleClickFilter(row)}>
              {columns.map((i) => (
                <td key={i}>{row[i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

export default TableComponent
