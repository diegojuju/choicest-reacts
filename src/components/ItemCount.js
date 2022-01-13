import { useState } from "react";

const ItemCount = () => {
    {/*const [count, setCount] = useState(0);*/}

    const [estado, setEstado ] = useState("Elegir");
    console.log ("Estado", estado)

    const changeToBuy = () => {
        setEstado("Comprado");   
    };

    const changeToSell = () => {
        setEstado("Vendido");
    };
    return (
        <div>      
        <button onClick={changeToSell}>Añadir a Carrito</button>
        <button onClick={changeToBuy}>Devolver a Carrito</button>
        <h2>Estado actual del producto/test: {estado}</h2>
        </div>
 
    );
};
export default ItemCount;