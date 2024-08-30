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
    margin-top: 50px;
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
`
