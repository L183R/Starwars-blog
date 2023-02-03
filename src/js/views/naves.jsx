import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Naves = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let elnumero = params.theid
	console.log("https://www.swapi.tech/api/starships/"+elnumero)


	// console.log(nave.result.properties.name)
	
	// function traerLaNave (){
	// 	fetch("https://www.swapi.tech/api/starships/"+elnumero)
	// 	  .then((response) => response.json())
	// 	  .then(data => setnave(data.result.properties))
	// 	  .then(console.log(nave))


	// }

	useEffect(() => {
		actions.traerLaNave(elnumero)
		console.log(store.laNave)
		console.log("store.laNave")
		}, [])
		return (
			<div className={`${store.fondo}`}>
			  <div className="row d-flex text-center">
				<h1 className={`${store.texto}`}>{store.laNave.name}</h1>
				<div className={`col m-3 p-2 ${store.estilo2}`}>
				  <img src={"https://starwars-visualguide.com/assets/img/starships/" + elnumero +".jpg" } className="card-img-top" alt="..." ></img>
				</div>
				<div className={`${store.texto} col m-3`}>
				  <p>Model: {store.laNave.model}</p>
				  <p>Starship class: {store.laNave.starship_class}</p>
				  <p>Manufacturer: {store.laNave.manufacturer}</p>
				  <p>Cost in credits: {store.laNave.cost_in_credits}</p>
				  <p>Length: {store.laNave.length}</p>
				  <p>Crew: {store.laNave.crew}</p>
				  <p>Passengers: {store.laNave.passengers}</p>
				  <p>Max atmosphering speed: {store.laNave.max_atmosphering_speed}</p>
				  <p>Hyperdrive rating: {store.laNave.hyperdrive_rating}</p>
				  <p>MGLT: {store.laNave.MGLT}</p>
				  <p>Cargo capacity: {store.laNave.cargo_capacity}</p>
				  <p>Consumables: {store.laNave.consumables}</p>
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
			
	// 	<h1>No hay datos de {store.laNave.name}</h1>
	// 		<Link to="/">
	// 			<span className="btn btn-primary btn-lg" href="#" role="button">
	// 				Back home
	// 			</span>
	// 		</Link>
	// 	</div></>
	// );
};

Naves.propTypes = {
	match: PropTypes.object
};