import { Link } from "react-router-dom"
import { AppContainer } from "./styles"
import logoImg from "../../assets//icons/logo.png";
import icon1 from "../../assets/icons/Vector.png";
import icon2 from "../../assets/icons/chart-line.png";
import icon3 from "../../assets/icons/facial-cleanser.png";

const Header = () => {
  return (
    <AppContainer>
        <div className="container_logo">
          <img src={logoImg}/>
        </div>
        <nav>
            <ul>
                <li>
                  <Link to="/dashboard">
                    <img src={icon1} alt="" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/Predictions">
                    <img src={icon2} alt="" />
                    <span>Predições</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/products">
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