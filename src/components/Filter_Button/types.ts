import { Dispatch, SetStateAction } from 'react'

export type FilterState = 'alta' | 'baixa'

export interface FilterBarProps {
  initialState: FilterState
  onFilterChange: Dispatch<SetStateAction<'alta' | 'baixa'>>
}
