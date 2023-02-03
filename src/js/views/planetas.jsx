import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let elnumero = params.theid

	// console.log(planeta.result.properties.name)
	
	// function traerElplaneta (){
	// 	fetch("https://www.swapi.tech/api/planets/"+elnumero)
	// 	  .then((response) => response.json())
	// 	  .then(data => setplaneta(data.result.properties))
	// 	  .then(console.log(planeta))


	// }

	useEffect(() => {
		actions.traerElplaneta(elnumero)
		}, [])
		return (
			<div className={`${store.fondo}`}>
			  <div className="row d-flex text-center">
				<h1 className={`${store.texto}`}>{store.elPlaneta.name}</h1>
				<div className={`col m-3 p-2 ${store.estilo2}`}>
				  <img src={"https://starwars-visualguide.com/assets/img/planets/" + elnumero +".jpg" } className="card-img-top" alt="..." ></img>
				</div>
				<div className={`${store.texto} col m-3`}>
				  <p>diameter: {store.elPlaneta.diameter}</p>
				  <p>rotation_period: {store.elPlaneta.rotation_period}</p>
				  <p>orbital_period: {store.elPlaneta.orbital_period}</p>
				  <p>gravity: {store.elPlaneta.gravity}</p>
				  <p>population: {store.elPlaneta.population}</p>
				  <p>climate: {store.elPersonaje.climate}</p>
				  <p>terrain: {store.elPlaneta.terrain}</p>
				  <p>surface_water: {store.elPlaneta.surface_water}</p>
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
	// return (
	// 	<>
	// 	<div className="jumbotron">
			
	// 	<h1>No hay datos de {store.elPlaneta.name}</h1>
	// 		<Link to="/">
	// 			<span className="btn btn-primary btn-lg" href="#" role="button">
	// 				Back home
	// 			</span>
	// 		</Link>
	// 	</div></>
	// );
};

Planetas.propTypes = {
	match: PropTypes.object
};