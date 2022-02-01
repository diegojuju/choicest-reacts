import Card from "react-bootstrap/Card"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom"
import '../../styles/style.css';

//Componente encargado de mostrar un breve detalle del producto
function Item({item}) {

    const {id,title,description,price,pictureUrl} = item  
    
    return (
        <>      
            <Card border="info" className="m-5 shadow mb-5 card-item bg-white rounded" key={id} style={{maxWidth:'17rem', }}>
                <Nav.Link as={Link} to={`/item/${id}`}>
                    <Card.Header className="fw-bold text-muted" style={{color: '#ff3d00'}} >{title}</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" src={pictureUrl} className="img-detail "/>                  
                        <Card.Text className='p-2 m-1 fw-bold h5'>u$s: {price}</Card.Text>                 
                        <Card.Title className="m-1 p-1 lead text-muted">{description}</Card.Title>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" >Detalles</Button>                        
                        </ButtonGroup>                       
                    </Card.Body>
                </Nav.Link>
            </Card>            
        </>
    )
}

export default Item