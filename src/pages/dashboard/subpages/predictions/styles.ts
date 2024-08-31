import styled from 'styled-components'

export const AppContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  .title {
    text-align: left;
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 600;
    font-family: Sora;
    color: #212121;
    line-height: 48px;
  }
  .containerCards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 10px;
    height: 67vh;
    max-height: 67vh;
    overflow-y: auto;
  }
`
