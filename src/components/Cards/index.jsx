import { useNavigate } from "react-router-dom";
import { CardStyled } from "./styled";

export default function Cards() {
  const navigate = useNavigate()
  return (
    <CardStyled onClick={()=>navigate("/recipe")}>
      <img
        src="https://static.itdg.com.br/images/1200-675/b7fbdbc168198caec6673ff663bcef66/322150-original.jpg"
        alt="Foto da comida"
        className="foodImg"
      />
      <p className="foodName">Omelete</p>
      <p className="chefName">Por: Pedro Sandes</p>
    </CardStyled>
  );
}
