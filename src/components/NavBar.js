import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';


function NavBar () {
    return (

        <Navbar bg="ligth" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CHOICEST</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#test">Test</Nav.Link>
              <NavDropdown title="Funcionalidades" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profesionales</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Links mas usados</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ubicación</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget/>
      </Navbar>
    )
}
export default NavBar