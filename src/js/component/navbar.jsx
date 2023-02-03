import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className={`navbar navbar-expand-lg ${store.estilo5} sticky-top`}>
      <div className="container-fluid position-relative"><div className="bg-dark p-2">
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars-768x329.png"
          width="80"
          height="50"
        ></img></div>
        <div>
          {store.festejo === true ? (
            <img
              src="https://i.kym-cdn.com/photos/images/newsfeed/001/059/271/8a8.gif"
              width="80"
              height="80"
            ></img>
          ) : (
            ""
          )}
        </div>
        <div>
          <button className={`nav-item dropdown ${store.estilo1} m-3 rounded`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites{" "}
              {store.favoritos.length === 0 ? "" : store.favoritos.length}
            </a>
            <ul className={`dropdown-menu ${store.texto} dropdown-menu-lg-end`}>
              {store.favoritos.map((element, index) => (
                <div className="row" key={index}>
                  <li className={`list-group-item ${store.estilo1} col-10`}>{element.nombre}</li>
                  <button
                    type="button"
                    className={`btn ${store.estilo2} col-1`}
                    onClick={() => actions.removerItem(index)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))}
            </ul>
          </button>
          {/* <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0583/2058/4877/files/880ce8_528c964fb8bd4deda526fb0005d15602_mv2_480x480.gif?v=1641559744"
              width="50"
              height="50"
            ></img>
          </button> */}
          <button className={`nav-item dropdown ${store.estilo2} rounded`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
              src="https://cdn.shopify.com/s/files/1/0583/2058/4877/files/880ce8_528c964fb8bd4deda526fb0005d15602_mv2_480x480.gif?v=1641559744"
              width="50"
              height="50"
            ></img>
            </a>
            <ul className={`dropdown-menu ${store.texto} dropdown-menu-lg-end`}>
                <div className="row">
                  <button className="list-group-item tatooine1" onClick={() => actions.ponerTatooine()}>Tatooine</button>
                  <button className="list-group-item deathstar1" onClick={() => actions.ponerDeathStar()}>Death Star</button>
                  <button className="list-group-item alderaan1" onClick={() => actions.ponerAlderaan()}>Alderaan</button>
                  <button className="list-group-item rebelalliance1" onClick={() => actions.ponerRebelAlliance()}>Rebel Alliance</button>
                  <button className="list-group-item endor1" onClick={() => actions.ponerEndor()}>Endor</button>
                </div>
            </ul>
          </button>          
        </div>
      </div>
    </nav>
  );
};
