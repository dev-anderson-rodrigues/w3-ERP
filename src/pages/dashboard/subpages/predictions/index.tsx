import { useState } from 'react'
import CardsPredictions from '../../../../components/Cards_predictions'
import { AppContainer } from './styles'
import { useCustomer } from '../../../../context/Customers/useCustomer'
import { useNavigate } from 'react-router-dom'
import { isCustomer } from './utils'
import InputFilter from '../../../../components/InputFilter'

const Predictions = () => {
  const [customerFilter] = useState<'alta' | 'baixa'>('baixa')
  const { customersList, getCustomerId } = useCustomer()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const formatPercentage = (percentage: number | undefined) => {
    if (typeof percentage === 'number' && !isNaN(percentage)) {
      percentage = percentage * 100
      return `${percentage.toFixed(2)}%`
    }
    return '0.00%'
  }
  const sortedCustomers = customersList
    ? [...customersList]
        .filter((client) =>
          search
            ? client.name.toLowerCase().includes(search.toLowerCase())
            : true,
        )
        .sort((a, b) => {
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
    Phone: item.phone,
    Email: item.email,
  }))

  const handleClickFilter = (obj: { [key: string]: any }) => {
    if (isCustomer(obj)) {
      getCustomerId(obj)
      navigate(`${obj.ID}`)
    }
  }
  return (
    <AppContainer>
      <h4 className="title">Predições</h4>
      <InputFilter setSearch={setSearch} search={search} />

      <div className="containerCards">
        {customerTableData.map((card) => (
          <CardsPredictions
            key={card.ID}
            ID={card.ID}
            Cliente={card.Cliente}
            Percentual={card.Percentual}
            Qtd={card.Qtd}
            onClick={() => handleClickFilter(card)}
          />
        ))}
      </div>
    </AppContainer>
  )
}

export default Predictions
