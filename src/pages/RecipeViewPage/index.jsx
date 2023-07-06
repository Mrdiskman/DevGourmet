import Header from "../../components/Header";
import { RecipeStyled } from "./styled";

export default function RecipeViewPage(){
  return(
    <>
      <Header/>
      <RecipeStyled>
      <img
        src="https://static.itdg.com.br/images/1200-675/b7fbdbc168198caec6673ff663bcef66/322150-original.jpg"
        alt="Foto da comida"
        className="foodImg"
      />
      <div className="recipeInfo">
        <h2 className="foodTitle">Omelete</h2>
        <p className="chefName">Por:Pedro Sandes</p>
      </div>

      <div>
        <p>Igredientes</p>
        <ul>
          <li>Ovos</li>
          <li>Sal</li>
          <li>Manteiga</li>
          <li>Pimenta do reino</li>
        </ul>
      </div>
      <div>
        <p>Modo de preparo</p>
        <ul>
          <li>Mexa os ovos</li>
          <li>Ponha os ovos na frigideira</li>
          <li>Adicione sal a gosto</li>
          <li>Ligue em fogo Baixo por 10 min</li>
        </ul>
      </div>
      </RecipeStyled> 
    </>
  )  
}