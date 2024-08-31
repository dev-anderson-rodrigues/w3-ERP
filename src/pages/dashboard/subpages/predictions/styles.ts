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
  .containerFilter {
    background-color: #ffffff;
    margin-bottom: 20px;
    padding: 10px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    width: auto;
    align-items: center;
    justify-content: left;
    box-shadow: 0px 4px 10px 0px #a3a3a333;
    position: relative;

    img {
      position: absolute;
      left: 370px;
      top: 2;
      cursor: pointer;
    }
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
