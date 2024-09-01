import { forwardRef, useState } from 'react'
import { propsInput } from './types'
import { Container, StyledTextField } from './styles'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Input = forwardRef<HTMLInputElement, propsInput>(
  ({ label, errorMessage, password, required, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <Container className="container_Input">
        <StyledTextField
          label={label}
          placeholder={`Enter your ${label}`}
          inputRef={ref}
          errorMessage={errorMessage}
          type={password ? (showPassword ? 'text' : 'password') : 'text'}
          variant="outlined"
          style={{ maxWidth: '90%', borderRadius: '10px', outline: 'none' }}
          fullWidth
          required={required}
          {...rest}
        />
        {password && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="button_psw"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </div>
        )}
      </Container>
    )
  },
)

export default Input
