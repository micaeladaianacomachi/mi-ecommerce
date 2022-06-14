import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import CartWidget from './CartWidget/CartWidget';
import { Link } from "react-router-dom";

function NavBar({cantCarrito}) {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
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
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to={`Categoria/${1}`}>
                                Remeras
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`Categoria/${2}`}>
                                Buzos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`Categoria/${3}`}>
                                Camperas
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item as={Link} to={`Categoria/${4}`}>
                                Pantalones
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">
                                Ver Todos
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