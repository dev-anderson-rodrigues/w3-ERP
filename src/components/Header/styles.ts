import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;

  .container_menu {
    margin-left: 20px;
  }
  .circle {
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #001c98;
    margin-right: 10px;
    transition: background-color 0.3s ease;

    img {
      width: 26px;
    }
  }

  .container_profile {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;

    .profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      h4 {
        color: #212121;
        font-size: 20px;
        font-weight: 600;
        font-family: Sora, 'arial sans', 'Helvetica';
        margin: 0;
      }
      p {
        color: #757575;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        font-family: Poppins;
        letter-spacing: 0.2px;
        margin: 0;
      }
      div img {
        width: 16px;
        cursor: pointer;
      }
    }
    .logout {
      display: flex;
      flex-direction: column;
      position: absolute;
      gap: 10px;
      top: 60px;
      right: 15px;
      background-color: #ffffff;
      padding: 10px;
      border-radius: 10px;
      box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 2px;
      div {
        display: flex;
        align-items: center;
        gap: 10px;

        p {
          color: #757575;
          font-size: 16px;
          font-family: Poppins;
          cursor: pointer;
          transition: color 0.3s ease;
          line-height: 24px;
          font-weight: 400;
        }
      }
    }
  }
`
