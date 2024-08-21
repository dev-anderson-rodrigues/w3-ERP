import { AppContainer } from './styles'
import menu from '../../assets/icons/menu.png'
import iconUser from '../../assets/icons/User.png'
import icon from '../../assets/icons/icon.png'
import { useAuth } from '../../context/AuthContext/useAuth'

const Header = () => {
  const { user } = useAuth()
  return (
    <AppContainer>
      <div className="container_menu">
        <img src={menu} alt="button Menu" />
      </div>
      <div className="container_profile">
        <div className="circle">
          <img src={iconUser} alt="icon user" />
        </div>
        <div className="profile">
          <div>
            <h4>Rafael Pimenta</h4>
            <p>{user?.email}</p>
          </div>
          <div>
            <img src={icon} />
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default Header
