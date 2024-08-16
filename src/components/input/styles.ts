import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-input': {
    color: '#333', // Cor do texto do input
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: 'Poppins', // Tamanho da fonte
    padding: '10px', // Padding interno
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    height: '60px',
  }
  
}));