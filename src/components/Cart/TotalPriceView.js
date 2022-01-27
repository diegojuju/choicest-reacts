import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

//componente que permite la visualizacion del precio total de los items agregados al carrito
function TotalPriceView({totalPrice}) {
    return (
        <Card className='m-3 p-2' style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'end'}}>                        
            <Container style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'end',marginRight:'0.5rem'}}>                     
                <Card.Title size="sm" style={{ paddingLeft:'1rem'}} className="display-5 lead">
                    Precio Total: u$s {totalPrice()}
                </Card.Title> 
            </Container>                        
        </Card>
    )
}

export default TotalPriceView
