import { Link } from "react-router-dom"
import { Container } from "./style"

const NotFound = () => {
  return (
    <Container>
    <span >404</span>
    <p style={{ fontSize: "1.5rem", margin: "0", paddingBottom: "15px" }}>
      Desculpe, a página que você está procurando não existe.
    </p>
    <Link
      to="/"
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
      }}
    >
      Voltar para a Página Inicial
    </Link>
    </Container>
  )
}

export default NotFound