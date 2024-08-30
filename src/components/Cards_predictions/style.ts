import styled from 'styled-components'

// Define a styled component for the App container

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 250px;
  padding: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  cursor: pointer;

  .nameCard {
    max-height: 100px;
    h4 {
      font-size: 16px;
      font-family: Poppins;
      font-weight: 600;
    }
    img {
      background-color: #c5cfff;
      width: 20px;
      height: 20px;
      padding: 10px;
      border-radius: 50%;
    }
  }
  .contentTopCard {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .containerSatus {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 20px;

    p {
      font-size: 14px;
      color: #00c247;
      font-family: Poppins;
      font-weight: 400;
      line-height: 19.6px;
      letter-spacing: 0.2px;
    }
    .radial {
      background: #00c247;
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
  }
  table {
    thead {
      background-color: #eeeeee;
    }
    tr {
      color: #796ce0;
      font-size: 14px;
      font-family: Poppins;
      font-weight: 400;
      line-height: 19.6px;
      letter-spacing: 0.2px;
    }
  }
`
