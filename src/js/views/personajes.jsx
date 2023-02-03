import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let elnumero = params.theid;
  console.log("https://www.swapi.tech/api/people/" + elnumero);

  useEffect(() => {
    actions.traerElPersonaje(elnumero);
  }, []);
  return (
    <div className={`${store.fondo}`}>
      <div className="row d-flex text-center">
        <h1 className={`${store.texto}`}>{store.elPersonaje.name}</h1>
        <div className={`col m-3 p-2 ${store.estilo2}`}>
          <img src={"https://starwars-visualguide.com/assets/img/characters/" + elnumero +".jpg" } className="card-img-top" alt="..." ></img>
        </div>
        <div className={`${store.texto} col m-3`}>
          <p>Height: {store.elPersonaje.height}</p>
          <p>Mass: {store.elPersonaje.mass}</p>
          <p>Hair color: {store.elPersonaje.hair_color}</p>
          <p>Skin color: {store.elPersonaje.skin_color}</p>
          <p>Eye color: {store.elPersonaje.eye_color}</p>
          <p>Birth year: {store.elPersonaje.birth_year}</p>
          <p>Gender: {store.elPersonaje.gender}</p>
        </div>
		<div className={`${store.texto} col m-3`}>
      <div>
			<h3>Planeta natal</h3>
			</div>
		</div>
        <Link to="/">
          <span className={`btn ${store.estilo1} btn-lg`} href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </div>
  );
};

Personajes.propTypes = {
  match: PropTypes.object,
};
