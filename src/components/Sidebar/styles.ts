import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 10vw;
    height: 100vh;
    background-color: #001C98;
    box-sizing: border-box;


    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        margin-left: 10px;
        flex-direction: column;
        gap: 10px;
        width: auto;

        li a{
            color: #FFFFFF;
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
    .container_logo{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            margin-top: 40px;
            margin-bottom: 40px;
            width: 70%;
        }
    }
  `;