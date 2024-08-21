import CardsGraphic from '../../../../components/Cards_graphic'
import FilterBar from '../../../../components/Filter_Button'
import { ContainerBlue } from './styles'

const TemplateDashboard = () => {
  return (
    <div>
      <ContainerBlue>
        <div>
          <h4>Dashboard</h4>
        </div>
        <div className="container_cards">
          <CardsGraphic
            text="Total produtos em alta"
            percentageGraphic={80}
            value={120}
            porcetage="+13%"
          />
        </div>
      </ContainerBlue>
      {/* <FilterBar initialState="alta" /> */}
      <FilterBar initialState="alta" />
      <FilterBar initialState="baixa" />
    </div>
  )
}

export default TemplateDashboard
