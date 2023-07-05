import { HeaderMobileStyled, HeaderStyled } from "./styled";
import logo from "./Black & White Minimalist Business Logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  return (
    <>
      <HeaderMobileStyled>
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav className="navContainer">
          <button className="btn login">Login</button>
          <button className="btn register">Registro</button>
        </nav>
      </HeaderMobileStyled>
      <HeaderStyled>
        <div className="emptyContainer"></div>
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" onClick={()=>navigate("/")}/>
        </div>
        <nav className="navContainer">
          <button className="btn login" onClick={()=>navigate("/login")}>Login</button>
          <button className="btn register" onClick={()=>navigate("/register")}>Registro</button>
        </nav>
      </HeaderStyled>
    </>
  );
}
