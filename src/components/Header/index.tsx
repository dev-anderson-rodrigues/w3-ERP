import { AppContainer } from './styles'
import menu from '../../assets/icons/menu.png'
import iconUser from '../../assets/icons/User.png'
import icon from '../../assets/icons/icon.png'
import { useAuth } from '../../context/AuthContext/useAuth'
import { useState } from 'react'

const Header = () => {
  const { user, logout } = useAuth()
  const [islogout, setIsLogout] = useState<boolean>(true)
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
            {islogout ? (
              <p>{user?.user}</p>
            ) : (
              <div className="logout">
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
          <div>
            <img src={icon} onClick={() => setIsLogout(!islogout)} />
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default Header
