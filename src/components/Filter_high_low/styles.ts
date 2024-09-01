import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #ffffff;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  box-shadow: 1px 0px 8px 6px rgba(187, 192, 205, 0.4);

  p {
    margin-left: 10px;
  }
  h5 {
    font-size: 16px;
    font-family: Poppins;
    color: #212121;
    margin: 0;
    padding: 10px;
    padding-left: 0;
    border-bottom: 2px solid #e0e0e0;
    margin-left: 10px;
    margin-right: 10px;
  }
  .content {
    display: flex;
    justify-content: space-between;

    .filters {
      display: flex;
      flex-direction: column;

      label {
        color: #212121;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 27.2px;
      }
      div .All {
        font-weight: 600;
      }
    }
    .values {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      margin-top: 8px;
      gap: 20px;
      color: #757575;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      font-family: Poppins;
    }
  }
  button {
    width: 100%;
    height: 40px;
    color: #ffffff;
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    border: none;
    border-radius: 16px;
  }
  .btn {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 3px;
  }
`
