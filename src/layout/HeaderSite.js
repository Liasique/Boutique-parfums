import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function HeaderSite() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Acceuil
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/produits">
              Produits
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contact">
              Contacts
            </Nav.Link>
            <NavDropdown title="Espace Client" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">
                Connecter
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                S'inscrire
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/espace-client">
                Espace Client
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderSite;
