import { Link, Outlet } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/sobre"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portifólio</Link>
            </li>
            <li>
              <Link to={"/contato"}>Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />

      <footer>
        <p>Esse é o meu rodapé</p>
      </footer>
    </>
  );
};
