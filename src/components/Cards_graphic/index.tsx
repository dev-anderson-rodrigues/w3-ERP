import { AppContainer } from "./styles"
import { propsCardsGraphics } from "./types"

const CardsGraphic = ({text, porcentage_circle, value, porcetage}: propsCardsGraphics) => {
  return (
    <AppContainer>
        <div className="div_left">{porcentage_circle && porcentage_circle}</div>
        <div className="div_right">
            <span>{text && text}
                <img src="" alt="" />
            </span>
            <div>
                <span className="value">
                    <h4>{value && value}</h4>
                </span>
                <span className="porcentage">{porcetage && porcetage}</span>
            </div>
        </div>
    </AppContainer>
  )
}

export default CardsGraphic