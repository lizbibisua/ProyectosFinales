import React from "react";
import "./detalle.css";
import {Link, useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import axios from "axios";

const DetalleTarjetas = () => {
  const [detalle, setDetalle] = useState([]);
  const { id } = useParams();
  const ts = 2;
  const key = "1d6a35f97baca97621ad5e82cbc3824e";
  const hash = "651354a8d07b31cc99ab1a5af069ba65";
  const categoria = "comics";
  const url = `https://gateway.marvel.com/v1/public/${categoria}/${id}?ts=${ts}&apikey=${key}&hash=${hash}`;

  
  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDetalle(respuesta.data.data.results[0]);
      } catch (error) {
        console.error("hubo un error: ", error);
      }
    };
    solicitud();
  }, []);

  if (!detalle || !detalle.thumbnail) {
    return (
      <div className="text-center loading">
        <div
          className="spinner-border text-secondary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
    <nav>
    <Link to="/tarjetas" className="btn btn-outline-secondary">Volver a Marvel</Link>
    </nav>  
    <main className="contenedordetalle">
      <div className="contenedorimg">
        <img
          src={`${detalle.thumbnail.path}/portrait_uncanny.${detalle.thumbnail.extension}`}
          alt=""
          className="img"
        />
      </div>
      <div className="contenedortitulo">
        <h2>{detalle.title}</h2>
        <h6>Fecha de Publicación</h6>
        <p>{detalle.dates[0].date}</p>
      </div>
    </main>
    </div>
  );
};

export default DetalleTarjetas;

{/*
      <nav>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-secondary" onClick={() => setCategoria("comics")}>Comics</button>
        <button type="button" class="btn btn-outline-secondary" onClick={() => setCategoria("series")}>Series</button>
        <button type="button" class="btn btn-outline-secondary" onClick={() => setCategoria("events")}>Eventos</button>
        </div>
      </nav>
*/}