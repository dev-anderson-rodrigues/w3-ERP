import { Link } from "react-router-dom"
import { AppContainer } from "./styles"
import logoImg from "../../assets//icons/logo.png";
import icon1 from "../../assets/icons/Vector.png";
import icon2 from "../../assets/icons/chart-line.png";
import icon3 from "../../assets/icons/facial-cleanser.png";

const Header = () => {
  return (
    <AppContainer>
        <img src={logoImg}/>
        <nav>
            <ul>
                <li>
                  <Link to="/dashboard">
                    <img src={icon1} alt="" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/predicoes">
                    <img src={icon2} alt="" />
                    <span>Predições</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/produtos">
                    <img src={icon3} alt="" />
                    <span>Produtos</span>
                  </Link>
                </li>
            </ul>
        </nav>
    </AppContainer>
  )
}

export default Header