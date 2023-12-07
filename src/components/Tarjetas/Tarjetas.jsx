import "./tarjetas.css";
import { Link } from "react-router-dom"

const Tarjetas = ({ ruta, titulo, descripcion, id }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={ruta}
          className="card-img-top"
          alt={titulo} title={titulo}
        />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">
            {descripcion}
          </p>
          <Link className="btn btn-primary" to={`/tarjetas/${id}`}>Ver Mas</Link>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
