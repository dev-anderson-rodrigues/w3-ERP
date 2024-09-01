import Checkbox from '@mui/material/Checkbox'

type propsFilter = {
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export default function ControlledCheckbox({ checked, onChange }: propsFilter) {
  return (
    <Checkbox
      checked={checked ? true : false}
      onChange={onChange}
      sx={{
        color: checked ? '#ffffff' : '#BDBDBD', // Cor do ícone do checkbox
        '&.Mui-checked': {
          color: '#004CE8', // Cor do ícone quando o checkbox está marcado
        },
        '& .MuiSvgIcon-root': {
          backgroundColor: checked ? '' : '', // Cor de fundo do ícone
          borderRadius: '4px', // Para deixar os cantos arredondados
        },
      }}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}
