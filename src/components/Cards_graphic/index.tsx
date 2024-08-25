import RadialBarDasboard from './PercetageGraphic/index'
import { AppContainer } from './styles'
import { propsCardsGraphics } from './types'

const CardsGraphic = ({
  text,
  percentageGraphic,
  value,
  percentage,
}: propsCardsGraphics) => {
  let formattedPercentage = ''

  if (percentage > 0) {
    formattedPercentage = `+${percentage}%`
  } else if (percentage < 0) {
    formattedPercentage = `${percentage}%`
  } else {
    formattedPercentage = `${percentage}%`
  }

  return (
    <AppContainer>
      <div className="div_left">
        {percentageGraphic && (
          <RadialBarDasboard percentageGraphic={percentageGraphic} />
        )}
      </div>
      <div className="div_right">
        <span>
          {text && text}
          <img src="" alt="" />
        </span>
        <div>
          <span className="value">
            <h4>{value && value}</h4>
          </span>
          <span
            className="percentage"
            style={{ backgroundColor: percentage < 0 ? '#FF3333' : '' }}
          >
            {formattedPercentage}
          </span>
        </div>
      </div>
    </AppContainer>
  )
}

export default CardsGraphic
