import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import CartWidget from './CartWidget/CartWidget';

function NavBar({cantCarrito}) {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Modachi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Ofertas</Nav.Link>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Remeras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Buzos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Camperas
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action6">
                                Pantalones
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link><CartWidget cartItems={cantCarrito}></CartWidget></Nav.Link>
                        <Nav.Link><Button variant="outline-info">Login</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default NavBar;