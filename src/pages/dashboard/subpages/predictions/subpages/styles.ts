import styled from 'styled-components'
import templateStyleDiv from '../../../../../assets/icons/fundo W3-01 1.png'

export const AppContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;

  .containerTitle {
    width: 100%;
    display: flex;
    height: 40px;
    align-items: center;

    .titlePage {
      padding-top: 30px;
      img {
        background-color: #eeeeee;
        padding: 5px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
      }
      h4 {
        color: #212121;
        font-weight: 400;
        font-size: 20px;
        font-family: Sora;
        line-height: 28px;
        letter-spacing: 0.2px;
        margin-left: 20px;
      }
    }
  }
  .containerBlue {
    background-color: #001c98;
    color: #ffffff;
    height: 150px;
    padding-left: 20px;
    padding-right: 60px;
    width: 95%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    border-radius: 20px;
    background-image: url(${templateStyleDiv});
    background-size: cover;
    background-position: center;

    .titleClient {
      h4 {
        font-family: Sora;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        margin: 0;
      }
      p {
        margin: 0;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
      .containerContact {
        display: flex;
        gap: 20px;

        .containerCall,
        .containerEmail {
          display: flex;
          gap: 10px;
        }
      }
    }
  }
  .tables {
    display: flex;
    height: 70vh;
    gap: 50px;

    table {
      width: 40vw;
    }
  }
  .titleNameTable_1 {
    h4 {
      color: #212121;
      font-family: Sora;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.2px;
    }
    img {
      background-color: #eeeeee;
      padding: 10px;
      border-radius: 10px;
    }
  }
  .titleNameTable_2 {
    h4 {
      color: #ff3333;
      font-family: Sora;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.2px;
    }
    img {
      background-color: #ffe1e1;
      padding: 10px;
      border-radius: 10px;
    }
  }
  .tableHistory,
  .tableOut_of_stock {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .product-hover-container {
    position: relative;
    display: inline-block;
  }

  .hover-message {
    display: none;
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    .tooltip {
      display: inline-block;
      background-color: #fff;
      color: #0066cc;
      width: 70px;
      height: 20px;
      font-size: 14px;
      padding: 4px 8px;
      border-radius: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: relative;
      text-align: center;
      font-weight: bold;
    }

    .tooltip::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px;
      border-style: solid;
      border-color: #fff transparent transparent transparent;
    }
  }

  .product-hover-container:hover .hover-message {
    display: block;
  }
  .imgOutProduct {
    &:hover {
      cursor: pointer;
    }
  }
  .columnNameTable {
    width: 100%; /* Ajuste conforme necessário */
    text-align: left;
    display: flex;
    align-items: center; /* Garante que o texto fique alinhado verticalmente ao centro */
    padding-left: 35px; /* Adiciona espaço para o texto não colar na borda */
  }
`
