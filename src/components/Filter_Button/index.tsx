import { useState } from 'react'
import { FilterButton, FilterWrapper } from './styles'
import { FilterBarProps, FilterState } from './types'

const FilterBar = ({ initialState, onFilterChange }: FilterBarProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterState>(initialState)

  return (
    <FilterWrapper>
      <FilterButton
        style={{
          backgroundColor: activeFilter === 'alta' ? '#00C247' : '#f4f4f4',
          color: activeFilter === 'alta' ? '#FFFFFF' : '#9E9E9E',
        }}
        onClick={() => {
          setActiveFilter('alta'), onFilterChange('alta')
        }}
      >
        Em alta
      </FilterButton>
      <FilterButton
        className="btn_low"
        style={{
          backgroundColor: activeFilter === 'baixa' ? '#FF3333' : '#f4f4f4',
          color: activeFilter === 'baixa' ? '#FFFFFF' : '#9E9E9E',
        }}
        onClick={() => {
          setActiveFilter('baixa'), onFilterChange('baixa')
        }}
      >
        Em baixa
      </FilterButton>
    </FilterWrapper>
  )
}

export default FilterBar
