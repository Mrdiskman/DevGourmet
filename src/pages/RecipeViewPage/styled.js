import styled from "styled-components"

export const RecipeStyled = styled.main`
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    .foodImg{
        width: 100%;
        height: 30vh
    }
    .recipeInfo{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        margin-bottom: 20px;
        align-items: center;
    }
    .foodTitle{
        font-weight: 600;
        font-size: 22px;
    }

    .chefName{
        font-weight: 600;
        font-size: 14px;
    }
`