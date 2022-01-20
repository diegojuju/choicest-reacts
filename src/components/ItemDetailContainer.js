import React, { useState, useEffect } from 'react';

import { ItemDetail } from '../components/ItemDetail';

export default function ItemDetailContainer() {
  const [products, setProducts] = useState();
  const [type, setType] = useState();

  const handleClick = (type) => {
    setType(type);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes');
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="app">
      <button onClick={() => handleClick('products')}>Listado de Personajes</button>
      {type === 'products' && (
        <section className="products">
          <h1 className="titleSection">Personajes de Harry Potter</h1>
          {products ? (
            products.map((product) => <ItemDetail {...product} />)
          ) : (
            <p>Cargando detalles...</p>
          )}
        </section>
      )}
     
    </div>
  );
}