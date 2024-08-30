import { Container } from './styles'

interface propsComponent {
  text: string
  img: string
  children?: React.ReactNode
  key?: string | number
}

const NameTable = ({ text, img, children, key }: propsComponent) => {
  return (
    <Container>
      <img src={img} alt={'icone' + text} />
      <div>
        <h4 key={key}>{text}</h4>
        {children}
      </div>
    </Container>
  )
}

export default NameTable
