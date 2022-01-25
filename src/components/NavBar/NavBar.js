import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import CartWidget from './CartWidget'
import '../../styles/style.css'

// barra de navegacion del sitio
function NavBar(){
 
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="d-flex justify-content-center title" sticky="top">
                <Container className="d-flex justify-content-center">                    
                    <Nav.Link as={Link} to="/">
                        <Navbar.Brand style={{fontSize:'3 rem'}}>Tu proxima carrera a un paso</Navbar.Brand>                    
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/categories/tests">Test vocacionales</Nav.Link>
                            <Nav.Link as={Link} to="/categories/profesionales">Profesionales</Nav.Link>
                            <Nav.Link as={Link} to="/categories/modalidad">Modalidad feedback Test</Nav.Link>      
                            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>                                        
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link as={Link} to= "/cart" >
                       <CartWidget/>                   
                    </Nav.Link> 
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar