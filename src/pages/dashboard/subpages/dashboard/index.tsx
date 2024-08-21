import CardsGraphic from "../../../../components/Cards_graphic"
import { ContainerBlue } from "./styles"

const TemplateDashboard = () => {
  return (
    <div>
      <ContainerBlue>
        <div>
          <h4>Dashboard</h4>
        </div>
        <div className="container_cards">
          <CardsGraphic text="Total produtos em alta" porcentage_circle="80%" value={120} porcetage="+13%" />
          <CardsGraphic text="Total produtos em alta" porcentage_circle="80%" value={120} porcetage="+13%" />
          <CardsGraphic text="Total produtos em alta" porcentage_circle="80%" value={120} porcetage="+13%" />
          <CardsGraphic text="Total produtos em alta" porcentage_circle="80%" value={120} porcetage="+13%" />
        </div>
      </ContainerBlue>
    </div>
  )
}

export default TemplateDashboard