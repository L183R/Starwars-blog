import React, { Component } from "react";

export const Card = () => (
    <div className="card m-5" style={{width: "18rem"}}>
  <img src="https://i.guim.co.uk/img/media/47483aa712ebb9d482e9bd6ec46f2e8baad9df01/68_17_2254_1352/master/2254.jpg?width=620&quality=45&dpr=2&s=none" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Jar Jar Binks</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-dark m-3 text-warning">Una cosa</button>
    <button className="btn btn-dark m-3 text-warning">Otra cosa</button>
  </div>
</div>
);
