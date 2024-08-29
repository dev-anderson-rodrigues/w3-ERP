import RadialBarDasboard from './PercetageGraphic/index'
import { AppContainer } from './styles'
import { propsCardsGraphics } from './types'

const CardsGraphic = ({
  text,
  percentageGraphic,
  value,
  percentage,
  className,
  classNamePropText,
  classNamePropValue,
}: propsCardsGraphics) => {
  let formattedPercentage = ''

  if (percentage !== undefined) {
    if (percentage > 0) {
      formattedPercentage = `+${percentage}%`
    } else {
      formattedPercentage = `${percentage}%`
    }
  }

  return (
    <AppContainer className={className}>
      <div className="div_left">
        {percentageGraphic && (
          <RadialBarDasboard percentageGraphic={percentageGraphic} />
        )}
      </div>
      <div className="div_right">
        <span className={classNamePropText ? classNamePropText : 'text'}>
          {text && text}
          <img src="" alt="" />
        </span>
        <div>
          <span className={classNamePropValue ? classNamePropValue : 'value'}>
            <h4>{value && value}</h4>
          </span>
          {percentage !== undefined && (
            <span
              className="percentage"
              style={{
                backgroundColor: percentage < 0 ? '#FF3333' : '#00c247',
              }}
            >
              {formattedPercentage}
            </span>
          )}
        </div>
      </div>
    </AppContainer>
  )
}

export default CardsGraphic
