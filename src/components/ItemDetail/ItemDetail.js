import { useCartContext } from "../../context/CartContext"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ItemCount from "../ItemCount/ItemCount"
import "../../styles/style.css"

//Componente encargado de mostrar el detalle del item seleccionado ademas de utilizar el componente ItemCount para seleccionar cantidad para agregar al carrito de compras
function ItemDetail({item}){
    
    const {addToCart} = useCartContext()    

    const onAdd =(cant)=>{            
        addToCart({cartItem:item,quantity:cant})  
    }
        
    return (
        <>       
            <h1 className='text-danger m-3 title'>Conocé mas</h1> 
            <Container className="justify-content-center align-item-center">            
                <Row className="justify-content-center">
                    <Col>
                        <Card border="info" className="m-3 shadow p-3 bg-white rounded" style={{maxWidth:'50rem'}}>
                            <Card.Header className="fw-bold">Descripción del producto</Card.Header>
                            <Card.Body>     
                                <Card.Text>{item.longDescription}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>          
                    <Col>
                        <Card border="danger" className="m-3 shadow p-3 bg-white rounded" key={item.id} style={{maxWidth:'20rem'}}>              
                            <Card.Header className="fw-bold">{item.title}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={item.pictureUrl}/>
                                <Card.Text>{item.description}</Card.Text>                        
                                <Card.Text>Precio u$s: {item.price}</Card.Text>     
                                <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd}/>                
                            </Card.Body>                
                        </Card>
                    </Col>
                </Row>            
            </Container>
        </>
    )
}

export default ItemDetail
