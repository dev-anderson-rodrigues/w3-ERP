/* eslint-disable @typescript-eslint/no-explicit-any */
interface Column {
  header: string
  className?: string
}
export interface TableProps {
  columns: Column[]
  data: Array<{
    [key: string]: any
  }>
}
