import {useCartContext} from "../../context/CartContext"
import Button from 'react-bootstrap/Button'

//componente que permite visualizar la cantidad de items que el usuario agregó a su carrito, utiliza la cantidad del context
function CartWidget() {

    const {totalQ}= useCartContext()

    return (
        <>  
            <Button variant="danger">

                  <img src="https://img.icons8.com/color/50/000000/opencart.png"/>

                    {totalQ()}
            </Button>                         
        </>
    )
}

export default CartWidget
