import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Divs } from "../component/divs.jsx";
import { Context } from "../store/appContext";
import { Cardper } from "../component/cardper.jsx";
import { Cardpla } from "../component/cardpla.jsx";
import { Cardnav } from "../component/cardnav.jsx";

export const Home = () => {
  const { store } = useContext(Context);
console.log(store.fondo)
  return (
    <div className={`${store.fondo}`}>
      <div className="container">
        Personajes
        <div className="container testimonial-group">
          <div className="row text-center">
            {store.personajes.map((lobicho, index) => {
              return (
                <Cardper
                  nombres={lobicho.name}
                  ids={lobicho.uid}
                  tipo="personaje"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="row"></div>

      <div className="container">
        Planetas
        <div className="container testimonial-group">
          <div className="row text-center">
            {store.planetas.map((loplaneta, index) => {
              return (
                <Cardpla
                  nombres={loplaneta.name}
                  ids={loplaneta.uid}
                  tipo="planeta"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        Naves
        <div className="container testimonial-group">
          <div className="row text-center">
            {store.naves.map((lanave, index) => {
              return (
                <Cardnav
                  nombres={lanave.name}
                  ids={lanave.uid}
                  tipo="nave"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};
