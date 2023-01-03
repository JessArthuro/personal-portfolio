import "../styles/header.scss";

function Header() {
  return (
    <header className="header container">
      <a href="#" className="logo">
        <span>{`[`}</span> JS Arturo <span>{`]`}</span>
      </a>

      <nav className="nav_menu">
        <ol className="nav_list">
          <li className="nav_item">
            <a className="nav_link" href="#">
              Sobre mí
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              Experiencia
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              Proyectos
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              Contacto
            </a>
          </li>
        </ol>

        <a
          className="cv_link"
          href="/public/CV_Jesus_Arturo_CA.pdf"
          download
          target="_blank"
        >
          Descargar CV
        </a>
      </nav>
    </header>
  );
}

export default Header;
