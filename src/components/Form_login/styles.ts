import { styled } from "styled-components";

export const ContainerForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h2 {
    padding-top: 20px;
    font-size: 1.5rem;
  }
  a {
    color: #616161;
    font-weight: 400;
    font-size: 16px;
    font-family: Poppins, Arial, Helvetica, sans-serif;
    text-decoration: none;
    transition: color 0.3s;
  }

  button {
    width: 90%;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    max-width: inherit;
  }

  .container_link {
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;

    .container_remember{
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        font-size: 16px;
        font-weight: 600;
        font-family: Poppins, Arial, Helvetica, sans-serif;
        color: #212121;
      }
      .checkbox_wrapper{
        display: flex;
        align-items: center;
      }
      .custom_checkbox{
        position: relative;
        width: 20px;
        height: 20px;
        -webkit-appearance: none;
        appearance: none;
        background-color: white;
        border: 2px solid #ccc;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s, border-color 0.3s;
      }
      .custom_checkbox:checked {
        background-color: #007bff;
        border: 2px solid #007bff;
        transition: background-color 0.3s;
      }
      .custom_checkbox:checked::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 4px;
        width: 9px;
        height: 5px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(-45deg);
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `