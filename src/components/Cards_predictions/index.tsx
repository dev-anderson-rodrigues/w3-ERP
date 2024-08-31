import NameTable from '../Name_Table'
import { AppContainer } from './style'
import user from '../../assets/icons/user2.png'
import imgRightArrow from '../../assets/icons/right.png'
import TableComponent from '../Table'
import { useProduct } from '../../context/Products/useProducts'
import { IProduct } from '../../context/Products/types'
import { formatDate, sortProductsByNextPurchaseDate } from './utils'
import { CardsPredictionsProps } from './types'

const CardsPredictions: React.FC<CardsPredictionsProps> = ({
  Cliente,
  onClick,
}) => {
  const { products } = useProduct()

  const productsObject: { [key: string]: IProduct } = products!.reduce(
    (acc, product) => {
      acc[product.id] = product
      return acc
    },
    {} as { [key: string]: IProduct },
  )

  const productsArray = Object.values(productsObject)

  const sortedProducts = sortProductsByNextPurchaseDate(productsArray)
  return (
    <AppContainer onClick={onClick}>
      <div className="contentTopCard">
        <div className="nameCard">
          <NameTable text={Cliente} img={user}>
            <div className="containerSatus">
              <div className="radial"></div>
              <p>Próxima Compra</p>
            </div>
          </NameTable>
        </div>
        <img src={imgRightArrow} className="rightArrow" />
      </div>
      <TableComponent
        columns={[{ header: 'Produto' }, { header: 'Próx. compra' }]}
        data={sortedProducts.slice(0, 3).map((product) => ({
          Produto: (
            <div style={{ textAlign: 'left', paddingLeft: '25px' }}>
              {product.name}
            </div>
          ),
          'Próx. compra': formatDate(product.nextPurchase),
        }))}
      />
    </AppContainer>
  )
}

export default CardsPredictions
