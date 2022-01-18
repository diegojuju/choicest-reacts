import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const [estado, setEstado] = useState("Cambio de estado");
  console.log("Estado", estado);

  const changeToBuy = () => {
    setEstado("Comprado");
  };
  const changeToSell = () => {
    setEstado("Vendido");
  };

  const onDecrease = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };
  const onIncrease = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const message = `Agregaste ${count} Test`;
    count === 1 ? alert(message) : alert(`${message}s`);
  };
  return (
    <div>
      <button onClick={changeToSell}>El estado cambio a Vendido</button>
      <button onClick={changeToBuy}>El estado cambio a Comprado</button>
      <h2>Estado actual del test: {estado}</h2>

     
      <div className="d-flex">
        <button className="px-3 mx-3" onClick={onDecrease}>
          -
        </button>
        <h3 className="px-3 mx-3">{count}</h3>
        <button className="px-3 mx-3" onClick={onIncrease}>
          +
        </button>
      </div>
      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
};
export default ItemCount;

