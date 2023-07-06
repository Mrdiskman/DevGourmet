import styled from "styled-components";

export const HeaderMobileStyled = styled.header`
  display: none;
  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #f8673a;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.3);
    .logoContainer {
      width: 50%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 10px;
    }
    .logo {
      height: 60%;
      width: 150px;
    }
    .navContainer {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    .btn {
      cursor: pointer;
      width: 75px;
      height: 32px;
      border-radius: 25px;
      font-weight: 600;
      background-color: #000000;
      border: none;
      color: #ffffff;
      font-family: "Inter", sans-serif;
      font-size: 16px;
    }
  }
  @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100px;
    background-color: #f8673a;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.3);
    .logoContainer {
      width: 50%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo {
      height: 60%;
      width: 150px;
    }
    .navContainer {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }

    .btn {
      cursor: pointer;
      width: 75px;
      height: 32px;
      border-radius: 25px;
      font-weight: 600;
      background-color: #000000;
      border: none;
      color: #ffffff;
      font-family: "Inter", sans-serif;
      font-size: 16px;
    }
  }
`;

export const HeaderStyled = styled.header`
  display: none;
  @media (min-width: 769px) {
    width: 100vw;
    height: 100px;
    background-color: #f8673a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.3);

    .btn {
      cursor: pointer;
      width: 90px;
      height: 35px;
      border-radius: 25px;
      font-weight: 600;
      background-color: #000000;
      border: none;
      color: #ffffff;
      font-family: "Inter", sans-serif;
      font-size: 16px;
    }

    .btn:hover {
      transition: 0.5s;
      background-color: #ffffff;
      color: #000000;
    }

    .navContainer {
      display: flex;
      gap: 20px;
      height: 100%;
      width: 33%;
      align-items: center;
      justify-content: flex-end;
      padding-right: 2%;
    }
    .logo {
      width: 200px;
      height: 50px;
    }
    .logoContainer {
      width: 33%;
      display: flex;
      justify-content: center;
    }
    .emptyContainer {
      width: 33%;
    }
  }
`;
