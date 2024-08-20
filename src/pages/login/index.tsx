import FormLogin from "../../components/Form_login"
import { Appcontainer } from "./style"
import imagPessoal from "../../assets/icons/wepik-photo-mode-2022730-141444 1.png"
import imgGraphic from "../../assets/icons/image 949.png"
import imgEmotion from "../../assets/icons/image 359.png"
import imagIcon from "../../assets/icons/Rectangle 4152.png"

const Login
 = () => {
  return (
    <Appcontainer>
    <div className="containerForm"><FormLogin/></div>

    <div className="containerImage">
      <div className="containerCenter">
        <div className="container_Text">
        <h3>Acompanhe suas vendas de um jeito <span>fácil e simples</span></h3>
        <img src={imagIcon} alt="" />
        <div className="container_Graphic">
          <img src={imgGraphic} alt="imagem Grafico"/>
        </div>
        <div className="container_emotion">
          <img src={imgEmotion} alt="icon emotion"/>
        </div>
        <img src={imagPessoal} alt="imagem homem" className="container_Icons"/>
        </div>
      </div>
    </div>
    </Appcontainer>
  )
}

export default Login
