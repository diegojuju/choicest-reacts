import { useState } from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

//componente encargado de realizar la logica de sumar o restar en cantidad requerida de items deseados, si no hay stock de un producto el boton de sumar o restar esta deshabilitado.
function ItemCount({stock,initial,onAdd}) {
    
    const [count,setCount]= useState(initial)
    const [btnAdd,setBtnAdd] = useState(true)
    const [stockItems,setStockItems] =useState(stock)

    function addCount() {
        if (count<stock){
            setCount(count+1)
        }        
    }
    
    function restCount(){    
        if (count>1){
            setCount(count-1)
        } 
    }

    const addItem=()=>{
        onAdd(count)
        setBtnAdd(false)
        setStockItems(stockItems-count)
    } 
       
    return (
        <>
            <Card.Body>                 
                <Card.Text className="fw-bold">Cantidad: {count}</Card.Text>
                <Card.Text className="text-secondary">Unidades disponibles: {stockItems}</Card.Text>
                <ButtonGroup aria-label="Basic example">
                {stock>0?//comprobacion del stock, en caso de no haber directamente el boton se deshabilita
                    <>
                        {btnAdd?
                            <>
                                <Button variant="secondary" onClick={restCount}>-</Button>
                                <Button variant="secondary" onClick={addItem}>Agregar al carrito</Button>
                                <Button variant="secondary" onClick={addCount}>+</Button>                       
                            </>
                            :    
                            <>
                                <Button variant="primary" color="primary" as={Link} to ={`/`}>Seguir comprando</Button>        
                                <Button variant="success" as={Link} to ={`/cart`}>Terminar Compra</Button>
                            </>                   
                        }
                    </>
                    :
                    <>
                       <Button variant="secondary" size="lg" disabled>Producto sin stock</Button>{' '}
                    </>
                }
                </ButtonGroup>
            </Card.Body>
        </>
    )
}

export default ItemCount