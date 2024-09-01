import { useState } from 'react'
import ControlledCheckbox from '../Checkbox'
import { AppContainer } from './styles'

const Filter_All_High_or_low = ({
  onFilterChange,
  setIsFilterVisible,
}: {
  setIsFilterVisible: (status: boolean) => void
  onFilterChange: (status: 'all' | 'high' | 'low') => void
}) => {
  // Estados temporários para armazenar as mudanças
  const [tempAllChecked, setTempAllChecked] = useState(true)
  const [tempHighChecked, setTempHighChecked] = useState(false)
  const [tempLowChecked, setTempLowChecked] = useState(false)

  const handleAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked

    setTempAllChecked(isChecked)
    setTempHighChecked(isChecked)
    setTempLowChecked(isChecked)
    onFilterChange('all')
  }

  const handleHighChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setTempHighChecked(isChecked)

    if (isChecked) {
      setTempAllChecked(false)
      setTempLowChecked(false)
    }
    if (!isChecked) {
      setTempAllChecked(false)
    }
  }

  const handleLowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setTempLowChecked(isChecked)

    if (isChecked) {
      setTempAllChecked(false)
      setTempHighChecked(false)
    }
    if (!isChecked) {
      setTempAllChecked(false)
    }
  }

  const handleApply = () => {
    if (tempAllChecked) {
      onFilterChange('all')
    } else if (tempHighChecked) {
      onFilterChange('high')
    } else if (tempLowChecked) {
      onFilterChange('low')
    }
    setIsFilterVisible(false)
  }
  return (
    <AppContainer>
      <h5>filtrar por:</h5>
      <p>Status</p>
      <div className="content">
        <div className="filters">
          <div>
            <ControlledCheckbox
              checked={tempAllChecked}
              onChange={handleAllChange}
            />
            <label htmlFor="All" className="All">
              Todos
            </label>
          </div>
          <div>
            <ControlledCheckbox
              checked={tempHighChecked}
              onChange={handleHighChange}
            />
            <label htmlFor="high">Em Alta</label>
          </div>
          <div>
            <ControlledCheckbox
              checked={tempLowChecked}
              onChange={handleLowChange}
            />
            <label htmlFor="low">Em Baixa</label>
          </div>
        </div>
        <div className="values">
          <span>awfa</span>
          <span>awfa</span>
          <span>awfa</span>
        </div>
      </div>
      <div className="btn">
        <button onClick={handleApply}>Aplicar</button>
      </div>
    </AppContainer>
  )
}

export default Filter_All_High_or_low
