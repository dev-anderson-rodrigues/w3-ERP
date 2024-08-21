import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: #02156A;
  width: 346px;
  height: 120px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 24px;
  margin-top: 10px;

  .div_left {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    font-family: Poppins;
    margin-left: 20px;
    margin-top: 25px;
  }
  .div_right{
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #C5CFFF;

    span {
      font-weight: 600;
      font-size: 16px;
      font-family: Poppins;
      letter-spacing: 0.2px;
      color: #C5CFFF;
    }
    div {
        display: flex;
        gap: 25px;
        align-items: center;
        justify-content: left;
        padding-left: 30px;

        .value {
            h4{
                font-weight: 600;
                font-size: 32px;
                font-family: Sora;
                color: #FFFFFF;
                margin-top: 5px;
            }
        }
        .porcentage{
            background-color: #00C247;
            border-radius: 100px;
            width: 60px;
            height: 24px;
            padding: 2px, 13px, 2px, 13px;
            color: #FFFFFF;
            font-weight: 400;
            font-size: 15px;
            font-family: Poppins;
            letter-spacing: 0.2px;
        }
    }
  }
  `;