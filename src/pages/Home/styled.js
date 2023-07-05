import styled from "styled-components";
export const HomeMobileStyled = styled.main`
  display: none;
  @media (min-width: 320px) and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 100%;
    .dataContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .addItem {
      background-color: #f8673a;
      width: 60%;
      border: none;
      border-radius: 10px;
      height: 30px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
    }

    .inputSearch {
      height: 25px;
      border: 1px solid #000000;
      border-radius: 10px;
      width: 70%;
    }
    .search {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
    .sourceContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: 70%;
    }
  }
  @media (min-width: 426px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 100%;
    .dataContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .addItem {
      background-color: #f8673a;
      width: 50%;
      border: none;
      border-radius: 10px;
      height: 30px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
    }

    .inputSearch {
      height: 25px;
      border: 1px solid #000000;
      border-radius: 10px;
      width: 60%;
    }
    .search {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
    .sourceContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: 70%;
    }
  }
`;

export const HomeStyled = styled.main`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    .dataContainer {
      display: flex;
      justify-content: space-between;
      width: 90%;
      align-items: center;    
    }
    .addItem {
      cursor: pointer;
      background-color: #f8673a;
      width: 15%;
      border: none;
      border-radius: 10px;
      height: 35px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
    }
    .addItem:hover {
      transition: 0.5s;
      background-color: #000000;
      color: #ffffff;
    }
    .sourceContainer {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .inputSearch {
      height: 30px;
      border: 1px solid #000000;
      border-radius: 10px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: #000000;
    }
    .search {
      cursor: pointer;
      width: 25px;
      height: 25px;
    }
    .cardsContainer{
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
