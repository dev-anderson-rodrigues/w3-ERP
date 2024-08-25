import { useProduct } from '../../context/Products/useProducts'
import CardsGraphic from '../Cards_graphic'

const Get_Product_Id = () => {
  const { customerProducts } = useProduct()
  return (
    <div>
      <h3>{customerProducts?.name}</h3>
      <CardsGraphic
        text="Total clientes em alta"
        percentageGraphic={72}
        value={501}
        percentage={25}
      />
    </div>
  )
}

export default Get_Product_Id
