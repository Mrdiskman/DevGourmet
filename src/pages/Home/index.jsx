import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { HomeMobileStyled, HomeStyled } from "./styled";
import { BiSearchAlt } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Header />
      <HomeStyled>
        <section className="dataContainer">
          <button className="addItem">Adicionar Nova Receita +</button>
          <div className="sourceContainer">
            <input
              type="text"
              className="inputSearch"
              placeholder="Pesquise..."
            />
            <BiSearchAlt className="search" />
          </div>
        </section>
        <section className="cardsContainer">
          <Cards />
          <Cards />
          <Cards />
        </section>
        <footer></footer>
      </HomeStyled>

      <HomeMobileStyled>
        <section className="dataContainer">
          <button className="addItem">Adicionar Nova Receita +</button>
          <div className="sourceContainer">
            <input type="text" className="inputSearch" />
            <BiSearchAlt className="search" />
          </div>
        </section>
        <section>
          <Cards />
          <Cards />
          <Cards />
        </section>
      </HomeMobileStyled>
    </>
  );
}
