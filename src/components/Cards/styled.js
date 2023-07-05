import styled from "styled-components";

export const CardStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
  border: solid 2px #000000;
  border-radius: 10px;
  background-color: #f8673a;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  .foodImg {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: solid 2px #000000;
  }
  .foodName {
    display: flex;
    justify-content: center;
    margin: 0px;
    width: 100%;
    height: 35px;
    align-items: center;
    border-bottom: solid 2px #000000;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
  }
  .chefName {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    margin: 0px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
  }
  @media (min-width: 769px) {
    width: 25%;
  }
`;
