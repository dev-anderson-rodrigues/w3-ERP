import { AppContainer } from './styles'
import menu from '../../assets/icons/menu.png'
import iconUser from '../../assets/icons/User.png'
import icon from '../../assets/icons/icon.png'
import { useAuth } from '../../context/AuthContext/useAuth'
import iconConfig from '../../assets/icons/setting-two.png'
import iconLogout from '../../assets/icons/logout.png'

const Header = () => {
  const { user, logout, showLogoutMenu, setShowLogoutMenu } = useAuth()
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
            <p>{user?.user}</p>
            {showLogoutMenu && (
              <div className="logout">
                <div>
                  <img src={iconConfig} />
                  <p>Configurações</p>
                </div>
                <div onClick={logout}>
                  <img src={iconLogout} />
                  <p>Sair</p>
                </div>
              </div>
            )}
          </div>
          <div>
            <img
              src={icon}
              onClick={() => setShowLogoutMenu(!showLogoutMenu)}
            />
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default Header
