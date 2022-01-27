import {useState} from 'react'
import {Link} from "react-router-dom"
import {useCartContext} from "../../context/CartContext"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

// este componente recibe por prop todos los datos del cliente y los items que esta comprando, valida que se haya ingresado un numero de orden correcto. Luego muestra por modal el numero de orden de compra
function EndWindow({generateOrder}) {
    const {clearCart,idOrder}= useCartContext() 
    const [show, setShow] = useState(false);
    const [idOld,setIdOld]=useState('')
    const [loading,setLoading]  = useState(false)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
//se comprueba que, si se esta intentando finalizar la compra con los datos aportados, pero no hubo orden emitida, significa que anteriormente no se hizo correctamente. Por ende debe completar los datos
//si el registro fue satisfactorio, el numero de orden existe y es distinto a la orden por default(vacia). En ese momento se genera la orden nueva y se muestra por pantalla.
    const finishBuy=()=>{  
        setIdOld(idOrder)        
        generateOrder()        
        setTimeout(()=>handleShow(),2000)  
        setLoading(true)           
    }
  
    const closeBuy=() =>{
        handleClose()
        clearCart()        
    }

    return (
        <>  
            <Button variant="success" onClick={finishBuy} style={{width:"90%",height:'5vh'}} className='m-2' type="submit">
                Finalizar Compra!
            </Button>
            {loading? 
                <>                          
                    {(idOld!==idOrder)?//si el numero de orden cambio, significa que se registraron datos correctamente. muestra el numero y el boton cerrar.
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Gracias por tu Compra!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Este es tu numero de orden {idOrder}, te lo enviaremos al email registrado anteriormente.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeBuy} as={Link} to ={`/`}>
                                    Cerrar
                                </Button>          
                            </Modal.Footer>
                        </Modal>
                        :                        
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Ups!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Parece que te olvidaste completar algunos datos, por favor completalos para finalizar la compra</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>          
                            </Modal.Footer>
                        </Modal>                        
                    }
                </>
                :
                <>
                </>        
            }
        </>
    )
}

export default EndWindow
    