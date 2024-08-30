import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  max-width: max-content;
  border-radius: 8px; /* cantos arredondados */

  img {
    margin-right: 10px; /* espaçamento entre imagem e texto */
    width: 24px; /* largura da imagem */
    height: 24px; /* altura da imagem */
  }

  div h4 {
    margin-left: 10px;
    font-family: Sora;
    letter-spacing: 0.2px;
    color: #212121;
    font-weight: 700;
    font-size: 20px;
    margin: 0;
  }
`
