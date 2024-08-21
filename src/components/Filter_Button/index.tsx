import { useState } from 'react'
import { FilterButton, FilterWrapper } from './styles'
import { FilterBarProps, FilterState } from './types'

const FilterBar = ({ initialState }: FilterBarProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterState>(initialState)

  return (
    <FilterWrapper>
      <FilterButton
        activeFilter="alta"
        isActive={activeFilter === 'alta'}
        onClick={() => setActiveFilter('alta')}
      >
        Em alta
      </FilterButton>
      <FilterButton
        activeFilter="baixa"
        className="btn_low"
        isActive={activeFilter === 'baixa'}
        onClick={() => setActiveFilter('baixa')}
      >
        Em baixa
      </FilterButton>
    </FilterWrapper>
  )
}

export default FilterBar
