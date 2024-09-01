import axios from 'axios'
import { Api } from '../../services/api'
import { IUser, IAuthUser } from './types'

export function getDadosProfileLocalStorage(): IUser | null {
  const profileJson = localStorage.getItem('profile')
  return profileJson ? JSON.parse(profileJson) : null
}

export function setDadosProfileLocalStorage(profile: IAuthUser | null): void {
  localStorage.setItem('profile', JSON.stringify(profile))
}
export function setRemoveProfileLocalStorage() {
  console.log('Removendo dados do local storage...')
  localStorage.removeItem('profile')
  console.log(
    'Dados removidos. Verifique o local storage:',
    localStorage.getItem('profile'),
  )
}
export const login = async (data: IAuthUser): Promise<IUser | null> => {
  try {
    // Fazendo a requisição para obter usuários com o email fornecido
    const response = await Api.get<IUser[]>(`login?user=${data.user}`)
    // Verificando se a senha está correta para o usuário com o email fornecido
    const user = response.data.find((user) => user.password === data.password)

    console.log(response)
    if (user) {
      return user
    } else {
      // Se o usuário não for encontrado ou a senha estiver incorreta
      console.log('Invalid email or password')

      throw Error
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 || error.response?.status === 401) {
        throw new Error('Usuário não autorizado!')
      }
    } else {
      throw new Error()
    }
    throw error
  }
}
