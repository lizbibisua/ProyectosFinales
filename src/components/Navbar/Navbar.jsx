import "./navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" activeclassname="activo" to="/tarjetas">
            Inicio
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            {/*  <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Comics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Personajes
                </a>
              </li>
            */}
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="activo" to="/">
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
