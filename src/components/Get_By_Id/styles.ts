import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 20px;
  .container_cards {
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    .cards {
      background-color: #ffffff;
      box-shadow: 0px 4px 4px rgba(163, 163, 163, 0.2); /* Sombra com 20% de opacidade */
      display: flex;
      width: 15%;
      border-radius: 24px;
    }
    .div_right {
      .text {
        font-weight: 400;
        color: #ffffff;
      }
      .classNamePropText {
        font-weight: 400;
        font-size: 16px;
        font-family: Poppins;
        letter-spacing: 0.2px;
        color: #212121;
      }
      .classNamePropValue {
        h4 {
          font-weight: 600;
          font-size: 32px;
          font-family: Sora;
          line-height: 48px;
          color: #001c98;
          margin: 0;
        }
      }
      div {
        gap: 10px;
      }
    }
  }
  h3 {
    color: #001c98;
    font-size: 36px;
    font-weight: 700;
    line-height: 50.4px;
    margin-top: 0;
    font-family: Sora, Poppins, Helvetica, sans-serif;
  }
  h4 {
    color: #212121;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    font-family: Sora;
    letter-spacing: 0.2px;
  }
  .container_detail {
    display: flex;
    gap: 20px;
    height: 100%;
    align-items: center;

    .img {
      background-color: #eeeeee;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
`

export const ContainerTables = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 20px;
  height: 100%;
  margin-bottom: 6.5%;

  table {
    th {
      width: 50vw;
      max-width: 50vw;
    }
  }
  .table {
    .name_and_filter {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        background-color: #ff3333;
        padding: 15px;
        border-radius: 8px;
      }
    }
    .name_and_filter2 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        background-color: #00c247;
        padding: 15px;
        border-radius: 8px;
      }
    }
  }
  @media (min-width: 1400px) {
    gap: 50px;
  }
`
