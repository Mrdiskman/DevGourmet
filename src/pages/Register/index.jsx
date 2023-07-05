import { useNavigate } from "react-router-dom";
import { RegisterStyled } from "./styled";
import { BiSolidSend } from "react-icons/bi";
export default function Register() {
  const navigate = useNavigate()
  return (
    <RegisterStyled>
      <form action="" className="formRegister">
        <label htmlFor="">Nome</label>
        <input
          type="text"
          className="emailInput"
          placeholder="exemplo@exemplo.com"
        />
        <label htmlFor="">Link para sua foto de perfil (Opcional)</label>
        <input
          type="text"
          className="emailInput"
          placeholder="exemplo@exemplo.com"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="emailInput"
          placeholder="exemplo@exemplo.com"
        />
        <label htmlFor="">Senha</label>
        <input type="password" className="passwordInput" placeholder="....." />

        <label htmlFor="">Repita sua senha</label>
        <input type="password" className="passwordInput" placeholder="....." />

        <button className="send" onClick={()=>navigate("/login")}>
          <BiSolidSend className="sendIcon"/>
        </button>
      </form>
    </RegisterStyled>
  );
}
