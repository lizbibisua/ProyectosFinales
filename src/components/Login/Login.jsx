import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [usuario, setUsuario] = useState("");
const [contrasena, setContrasena] = useState("");
const navigate = useNavigate();

const handleUsuarioChange = (e) => {
  setUsuario(e.target.value);
};

const handleContrasenaChange = (e) => {
  setContrasena(e.target.value);
};

  const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("usuario", usuario);
  localStorage.setItem("contrasena", contrasena);
  navigate("/tarjetas");
};

  return (
    <>
      <main className="contenedorlogin">
        <form className="contenedorformulario" onSubmit={handleSubmit}>  {/*</main>onSubmit={handleSubmit}//</>*/}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Usuario
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su usuario"
              aria-label="Ingrese su usuario"
              aria-describedby="basic-addon1"
              value={usuario}
              onChange={handleUsuarioChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Contraseña
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              aria-label="Ingrese su contraseña"
              aria-describedby="basic-addon1"
              value={contrasena}
              onChange={handleContrasenaChange}
            />
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Inicio Sesión
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
