import React from 'react';


export const ItemDetail = ({
  personaje,
  apodo,
  imagen,
  estudianteDeHogwarts,
  hijos,
  casaDeHogwarts,
}) => {
  return (
    <div className="Detalles">
      <h2 className="casaDeHogwarts">{casaDeHogwarts}</h2>
      <img className="img" src={imagen} alt="product img" />
      <span className="data">
        <p className="estudianteDeHogwarts">{estudianteDeHogwarts}</p>
        <p className="hijos">{hijos}</p>
      </span>
      <p className="apodo">{apodo}</p>
      <p className="personaje">{personaje}</p>
    </div>
  );
};

