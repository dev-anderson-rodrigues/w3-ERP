import styled from 'styled-components'
export const AppContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: #02156a;
  min-width: 15%;
  height: 120px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 24px;
  margin-top: 10px;

  .div_left {
    margin-top: 25px;
  }
  .div_right {
    display: flex;
    flex-direction: column;
    color: #c5cfff;

    .text {
      font-weight: 600;
      font-size: 16px;
      font-family: Poppins;
      letter-spacing: 0.2px;
      color: #c5cfff;
      margin-bottom: 10px;
    }
    div {
      display: flex;
      gap: 30px;
      align-items: center;
      justify-content: left;

      .value {
        h4 {
          font-weight: 600;
          font-size: 32px;
          font-family: Sora;
          color: #ffffff;
          margin: 0;
        }
      }
      .percentage {
        border-radius: 100px;
        width: 60px;
        height: 24px;
        padding: 2px, 13px, 2px, 13px;
        color: #ffffff;
        font-weight: 400;
        font-size: 15px;
        font-family: Poppins;
        letter-spacing: 0.2px;
        text-align: center;
      }
    }
  }

  @media (min-width: 150px) {
    padding-right: 40px;
    padding-left: 10px;
  }
`
