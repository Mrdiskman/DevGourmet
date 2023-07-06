import { LoginStyled } from "./styled";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <LoginStyled>
      <form action="" className="formLogin">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="emailInput"
          placeholder="exemplo@exemplo.com"
        />
        <label htmlFor="">Senha</label>
        <input type="password" className="passwordInput" placeholder="....." />
        <button className="send" onClick={() => navigate("/")}><BiLogIn className="loginIcon" /></button>
      </form>
    </LoginStyled>
  );
}
