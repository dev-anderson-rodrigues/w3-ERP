import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import { propsInput } from './types'

export const StyledTextField = styled(TextField)<propsInput>(() => ({
  '& .MuiInputBase-input': {
    color: '#333',
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'Poppins',
    padding: '10px',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    height: '60px',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4CAF50', // Muda a cor da borda para verde quando focado'
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#4CAF50', // Cor da label quando o input está em foco
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    outline: 'none',
    boxShadow: 'none',
  },
}))

export const Container = styled.span`
  position: relative;
  .button_psw {
    margin-top: 20px;
    position: absolute;
    right: 55px;
    cursor: pointer;
    color: #bdbdbd;
    transition: all 0.3s ease-in-out;
  }
`
