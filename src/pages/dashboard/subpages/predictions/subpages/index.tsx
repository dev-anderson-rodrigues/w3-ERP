import NameTable from '../../../../../components/Name_Table'
import { useCustomer } from '../../../../../context/Customers/useCustomer'
import { AppContainer } from './styles'
import iconleftSmall from '../../../../../assets/icons/left-small.png'
import iconPhone from '../../../../../assets/icons/phone-telephone.png'
import iconEmail from '../../../../../assets/icons/mail.png'

const PredictionById = () => {
  const { customersClient } = useCustomer()
  return (
    <AppContainer>
      <div className="containerTitle">
        <div className="titlePage">
          <NameTable
            img={iconleftSmall}
            text="Predição"
            link="/dashboard/Predictions"
          />
        </div>
      </div>
      <div className="containerBlue">
        <div className="titleClient">
          <h4>{customersClient?.Cliente}</h4>
          <div className="containerContact">
            <div className="containerCall">
              <img src={iconPhone} />
              <p>{customersClient?.Phone}</p>
            </div>
            <div className="containerEmail">
              <img src={iconEmail} />
              <p>{customersClient?.Email}</p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default PredictionById
