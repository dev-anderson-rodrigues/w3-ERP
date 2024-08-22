import { Container } from './styles'

interface propsComponent {
  text: string
  img: string
}

const NameTable = ({ text, img }: propsComponent) => {
  return (
    <Container>
      <img src={img} alt={'icone' + text} />
      <h4>{text}</h4>
    </Container>
  )
}

export default NameTable
