import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cardper = ({nombres, ids, tipo}) => {
  const {store, actions} = useContext(Context)
  return (
    <div className="card m-1 col-3" style={{width: "15rem", height: "auto"}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+ids+".jpg"} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className={`${store.texto} card-title`}>{nombres}</h5>
    <p className="card-text">Height: </p>
    <Link to={"/personajes/"+ids} className={`btn ${store.estilo1}`}>A ver...</Link>
    <button className={`btn ${store.favoritos.find(obj => obj.nombre === nombres) === undefined ? store.estilo1 : store.estilo2} m-3 col-3`} onClick={() => actions.agregarItem(nombres, ids, tipo)}><i className="fa fa-heart"/></button>
  </div>
</div>);
};
