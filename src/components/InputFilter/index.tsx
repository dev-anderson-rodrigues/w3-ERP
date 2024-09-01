import Input from '../Input'
import iconSearch from '../../assets/icons/search.png'
import { AppContainer } from './styles'
import { useState } from 'react'

type props = {
  search: string // Valor do input de busca
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
const InputFilter = ({ setSearch, search }: props) => {
  const [tempSearch, setTempSearch] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearch(e.target.value)
  }
  const handleSearchClick = () => {
    setSearch(tempSearch)
  }
  return (
    <AppContainer>
      <Input
        placeholder="Pesquise uma palavra-chave"
        value={tempSearch}
        onChange={handleChange}
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
      <img src={iconSearch} onClick={handleSearchClick} />
    </AppContainer>
  )
}

export default InputFilter
