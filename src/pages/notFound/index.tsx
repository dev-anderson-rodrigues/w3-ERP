import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>  <h1 style={{ fontSize: "6rem", margin: "0" }}>404</h1>
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
    </Link></div>
  )
}

export default NotFound