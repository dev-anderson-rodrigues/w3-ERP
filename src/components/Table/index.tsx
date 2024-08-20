import { Table, TableWrapper } from "./styles";
import { TableProps } from "./types";

const TableComponent = ({ columns, data }: TableProps) => {

    return (
      <TableWrapper>
        <Table>
          <thead>
              <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
              </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
    </TableWrapper>
      );
}

export default TableComponent