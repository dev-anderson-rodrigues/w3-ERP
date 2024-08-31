import styled from 'styled-components'

export const AppContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  .TitlePage {
    color: #212121;
    font-family: Sora;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    margin-bottom: 2;
  }
  .filter {
    display: flex;
    gap: 10px;
    align-items: center;
    height: 60px;
    margin-bottom: 20px;

    .iconPageProducts {
      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        background-color: #f5f5f5;
      }
    }
  }
  .status_high,
  .status_low {
    display: inline-flex;
    width: 100px;
    height: 17px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-weight: 400;
    font-family: Poppins;
    font-size: 16px;
    line-height: 24px;
  }
  .status_high {
    background-color: #d9fee6;
    color: #00c247;
  }
  .status_low {
    background-color: #ffe1e1;
    color: #ff3333;
  }
  .columnNameTable {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    padding-left: 202px;
  }
  .id_column {
    width: 10%;
  }
  .produto-column {
    width: 30%;
  }
`
