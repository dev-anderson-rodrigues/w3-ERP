export interface CardsPredictionsProps extends propsCards {
  ID?: string | number
  Cliente: string
  Percentual?: string
  Qtd?: number
}
interface propsCards {
  onClick?: () => void
}
