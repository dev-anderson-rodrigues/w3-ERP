import NameTable from '../Name_Table'
import { AppContainer } from './style'
import user from '../../assets/icons/user2.png'
import imgRightArrow from '../../assets/icons/right.png'
import TableComponent from '../Table'
import { useProduct } from '../../context/Products/useProducts'
import { IProduct } from '../../context/Products/types'
import { formatDate, sortProductsByNextPurchaseDate } from './utils'
import { useCustomer } from '../../context/Customers/useCustomer'

const CardsPredictions = () => {
  const { products } = useProduct()
  const { customersList } = useCustomer()

  // const customer = customersList.reduce((acc, customer) => customer.name)

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
    <AppContainer>
      <div className="contentTopCard">
        <div className="nameCard">
          <NameTable text="shgshs" img={user}>
            <div className="containerSatus">
              <div className="radial"></div>
              <p>Próxima Compra</p>
            </div>
          </NameTable>
        </div>
        <img src={imgRightArrow} className="rightArrow" />
      </div>
      <TableComponent
        columns={['Produto', 'Próx. compra']}
        data={sortedProducts.map((product) => ({
          Produto: product.name,
          'Próx. compra': formatDate(product.nextPurchase),
        }))}
      />
    </AppContainer>
  )
}

export default CardsPredictions
