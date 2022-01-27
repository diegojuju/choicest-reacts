import {RiDeleteBin6Line} from "react-icons/ri"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

// componente que permite visualizar en el Carrito los items que el usuario agrego, ademas se pueden cambiar las cantidades de los items seleccionados asi como eliminarlos del carrito
function ItemCardView({item,removeItem,addToCart}) {
    
    function changeQuantity(itemChange,cant) {            
        addToCart({cartItem:itemChange,quantity:cant})       
    }

    return (
        <Card className='m-2 p-1'key={item.cartItem.id} style={{display:'flex' ,flexDirection:'row', alignItems:'center', backgroundColor: item.cartItem.stock<item.quantity?'#FDBCB4':'white'}}                > 
            <Container style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                <Card.Img variant="top" src={item.cartItem.pictureUrl} style={{ height: '4rem',width:'5.2rem'}} />                            
                <Card.Title style={{ paddingLeft:'1rem'}} >{item.cartItem.title}</Card.Title>                                
                <Button onClick={()=>removeItem(item.cartItem.id)} variant="info">
                    <RiDeleteBin6Line className='h4' style={{justifyContent:"center"}}/>
                </Button>                                
            </Container>                                        
            <Container key={item.cartItem.id} style={{ display:'flex' ,flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
                <Container style={{ display:'flex' ,flexDirection:'row',  justifyContent:'center', alignItems:'center'}}>
                    <Card.Title className="m-1">Cantidad:</Card.Title>                                              
                    {item.quantity>1?
                        <Button variant="secondary" onClick={()=>changeQuantity(item.cartItem,-1)} className="m-1 h6">-</Button>                                           
                    :
                        <Button variant="secondary" onClick={()=>changeQuantity(item.cartItem,-1)} className="m-1 h6" disabled>-</Button>
                    }                                                
                    <Card.Title className="m-1">{item.quantity}</Card.Title>                                                
                    <Button variant="secondary" onClick={()=>changeQuantity(item.cartItem,1)} className="m-1 h6">+</Button>
                </Container>
                <Container>
                    <Card.Title style={{fontSize:'1.3rem'}}  className="m-1">Stock {item.cartItem.stock}</Card.Title>
                </Container>
                <Container style={{ display:'flex' ,flexDirection:'row',  justifyContent:'end', alignItems:'center'}}>
                    <Card.Title style={{fontSize:'1.5rem'}}  className="m-1">u$s</Card.Title>
                    <Card.Title style={{fontSize:'1.5rem'}}  className="m-1"> {item.cartItem.price*item.quantity}</Card.Title>
                </Container>
            </Container> 
        </Card>            
    )
}

export default ItemCardView
