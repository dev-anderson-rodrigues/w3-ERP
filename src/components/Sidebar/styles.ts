import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 11.5vw;
  height: 100vh;
  background-color: #001c98;
  box-sizing: border-box;

  ul {
    list-style-type: none;
    padding: 10px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: auto;

    li {
      width: 100%;
      cursor: pointer;
      border-radius: 10px;
    }
    li a {
      color: #ffffff;
      padding: 10px;
      text-decoration: none;
      transition: color 0.3s;
      font-weight: 500;
      font-size: 16px;
      height: 40px;
      align-items: center;
      display: flex;
      font-family: Poppins, Arial, Helvetica, sans-serif;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
  .container_logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 70%;
    }
  }
  .container_suporte {
    max-width: 100%;
    margin: 10px;
    margin-top: 150%;
    height: 150px;
    background-color: #796ce0;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 30px;
    position: relative;

    p {
      max-width: 170px;
      color: #ffffff;
      font-size: 16px;
      font-family: Poppins;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 10px;

      span {
        font-weight: 600;
      }
    }
    img {
      position: absolute;
      bottom: 85px;
    }
    a {
      background-color: #001c98;
      padding: 0px 30px;
      border-radius: 20px;
      height: 40px;
      align-items: center;
      display: flex;
    }
  }
`
