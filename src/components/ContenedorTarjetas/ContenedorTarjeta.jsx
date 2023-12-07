import "./contenedortarjeta.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Tarjetas from "../Tarjetas/Tarjetas";
import { useNavigate } from "react-router-dom";


const ContenedorTarjeta = () => {
  const [datos, setDatos] = useState([]);
  const [categoria, setCategoria] = useState("events");
  const ts = 2;
  const key = "1d6a35f97baca97621ad5e82cbc3824e";
  const hash = "651354a8d07b31cc99ab1a5af069ba65";
  const url = `https://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // Agrega la lógica para cerrar la sesión (por ejemplo, limpiar localStorage)
    localStorage.removeItem("usuario");
    localStorage.removeItem("contrasena");

    // Redirige al usuario a la página de inicio de sesión
    navigate("/");
  };

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
        console.log(respuesta.data.data.results)
      } catch (error) {
        console.log("hubo un error", error);
      }
    };
    solicitud();
  }, [url,categoria]);

  return (
    <>
      <nav>
      <div className="btn-group" role="group" aria-label="Basic example">
        {/* Agrega controles para cambiar entre "comics" y "series" */}
        <button type="button" className="btn btn-outline-secondary" onClick={() => setCategoria("comics")}>Comics</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => setCategoria("series")}>Series</button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => setCategoria("events")}>Eventos</button>
        </div>
        <button className="cerrar-sesion-btn" type="button" onClick={handleCerrarSesion}>Cerrar Sesión</button>
      </nav>

     

      <main className="contenedor">
        {datos.length === 0 ? (
          <div className="text-center loading">
            <div
              className="spinner-border text-secondary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          datos.map((item) => (
            <Tarjetas
              key={item.id}
              ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
              titulo={item.title}
              descripcion={item.description}
              id={item.id}
            />
          ))
        )}
      </main>
      
    </>
  );
};

export default ContenedorTarjeta;

{
  /*datos.map((item) => (
        <Tarjetas
        key={item.id}
        ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
        titulo={item.title}
        descripcion={item.description}
        id={item.id}
        />
    ))*/
}
