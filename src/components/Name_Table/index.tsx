import { Link } from 'react-router-dom'
import { Container } from './styles'

interface propsComponent {
  text: string
  img: string
  children?: React.ReactNode
  key?: string | number
  link?: string
}

const NameTable = ({ text, img, children, link, key }: propsComponent) => {
  return (
    <Container>
      {link ? (
        <Link to={link} rel="noopener noreferrer">
          <img src={img} alt={'icone' + text} />
        </Link>
      ) : (
        <img src={img} alt={'icone' + text} />
      )}

      <div>
        <h4 key={key}>{text}</h4>
        {children}
      </div>
    </Container>
  )
}

export default NameTable
