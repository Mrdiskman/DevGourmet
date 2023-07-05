import styled from "styled-components";

export const LoginStyled = styled.main`
  background-color: #f8673a;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .formLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 450px;
    width: 90%;
    background-color: #ffffff;
    border-radius: 10px;
    padding-inline: 5px;
  }
  label {
    margin-top: 50px;
    margin-bottom: 10px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
  .send {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    background-color: #000000;
  }
  .send:hover {
    background-color: #f8673a;
    transition: 0.5s;
    .loginIcon {
      color: #000000;
    }
  }
  input {
    border-radius: 10px;
    height: 50px;
    border: none;
    background-color: #d9dbda;
    height: 40px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding-left: 10px;
  }

  .loginIcon {
    color: #ffffff;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 769px) and (max-width: 1300px) {
    .formLogin {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 450px;
      width: 60%;
      background-color: #ffffff;
      border-radius: 10px;
      padding-inline: 5px;
    }
  }
  @media (min-width: 1301px) {
    .formLogin {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 450px;
      width: 20%;
      background-color: #ffffff;
      border-radius: 10px;
      padding-inline: 5px;
    }
  }
`;
