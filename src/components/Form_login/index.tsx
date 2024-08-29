import { useEffect, useState } from 'react'
import { Container, ContainerForm } from './styles'
import { useNavigate } from 'react-router-dom'
import {
  getDadosProfileLocalStorage,
  setDadosProfileLocalStorage,
} from '../../context/AuthContext/utils'
import { useAuth } from '../../context/AuthContext/useAuth'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import { IAuthUser } from '../../context/AuthContext/types'

const FormLogin = () => {
  const { login, setRememberMe, rememberMe } = useAuth()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IAuthUser>({
    mode: 'onSubmit',
  })

  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  useEffect(() => {
    const savedCredentials = getDadosProfileLocalStorage()
    if (savedCredentials) {
      try {
        const { user, password } = savedCredentials
        setValue('user', user)
        setValue('password', password)
      } catch (error) {
        console.error('Failed to parse saved credentials:', error)
      }
    }
  }, [setValue])

  const handleFormSubmit = async ({ user, password }: IAuthUser) => {
    const credentials = { user, password }
    setDadosProfileLocalStorage(credentials)

    try {
      const response = await login(credentials)
      if (response) {
        setIsAuthenticated(() => true)
        setTimeout(() => {
          navigate('/dashboard')
        }, 1000)
      }
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message)
    }
  }

  return (
    <Container>
      <ContainerForm onSubmit={handleSubmit(handleFormSubmit)}>
        <span>Seja bem-vindo!</span>
        <h2>Realize seu Login</h2>
        <div className="container_content">
          <Input
            label="E-mail"
            password={false}
            autoComplete="current-email"
            {...register('user', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Email inválido',
              },
            })}
            error={!!errors.user}
            helperText={errors.user?.message}
          />

          <Input
            label="Senha"
            password={true}
            autoComplete="current-password"
            {...register('password', {
              required: 'Senha é obrigatória',
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&.*])[0-9a-zA-Z!@#$%^&*]{6,}$/,
                message:
                  'Senha deve ter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <button type="submit" disabled={isSubmitting && isValid}>
            {isSubmitting ? 'Loading...' : 'Entrar'}
          </button>

          {errorMessage && (
            <div style={{ maxWidth: '85%' }}>{errorMessage}</div>
          )}

          <div className="container_link">
            <span className="container_remember">
              <div className="checkbox_wrapper">
                <input
                  type="checkbox"
                  className="custom_checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </div>
              <p>Lembre-me</p>
            </span>
            <span>
              <a href="#">Esqueci minha senha</a>
            </span>
          </div>
        </div>
      </ContainerForm>
    </Container>
  )
}

export default FormLogin
