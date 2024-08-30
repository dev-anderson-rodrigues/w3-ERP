import { useState } from 'react'
import CardsPredictions from '../../../../components/Cards_predictions'
import Input from '../../../../components/Input'
import { AppContainer } from './styles'
import { useCustomer } from '../../../../context/Customers/useCustomer'

const Predictions = () => {
  const [customerFilter, setCustomerFilter] = useState<'alta' | 'baixa'>(
    'baixa',
  )
  const { customersList } = useCustomer()

  const formatPercentage = (percentage: number | undefined) => {
    if (typeof percentage === 'number' && !isNaN(percentage)) {
      percentage = percentage * 100
      return `${percentage.toFixed(2)}%`
    }
    return '0.00%'
  }
  const sortedCustomers = customersList
    ? [...customersList].sort((a, b) => {
        return customerFilter === 'alta'
          ? b.percentage! - a.percentage!
          : a.percentage! - b.percentage!
      })
    : []

  const customerTableData = sortedCustomers.slice(0, 199).map((item) => ({
    ID: item.id,
    Cliente: item.name,
    Percentual: formatPercentage(item.percentage),
    Qtd: item.amount,
  }))

  return (
    <AppContainer>
      <h4 className="title">Predições</h4>

      <div className="containerFilter">
        <Input
          placeholder="Pesquise uma palavra-chave"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              border: '1px solid #E0E0E0',
              borderRadius: '10px',
              padding: '0 10px',
              width: '400px',
              height: '45px',
            },
            '& .MuiInputBase-input': {
              color: '#757575',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: 'Poppins',
              padding: '10px',
              lineHeight: '24px',
            },
          }}
        />
      </div>

      <div className="containerCards">
        {customerTableData.map((card) => (
          <CardsPredictions
            key={card.ID}
            ID={card.ID}
            Cliente={card.Cliente}
            Percentual={card.Percentual}
            Qtd={card.Qtd}
          />
        ))}
      </div>
    </AppContainer>
  )
}

export default Predictions
