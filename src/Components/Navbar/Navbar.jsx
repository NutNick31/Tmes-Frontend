import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function NavScrollExample() {
  return (
    <>
      <Navbar bg="light" expand="xl">
        <Container fluid>
          <LinkContainer to="/">
            <Nav.Link>TMES</Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Offline Events" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Enviro_CS">
                    <Nav.Link>Enviro_CS</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Geobotics">
                    <Nav.Link>Geobotics</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Indu_Design">
                    <Nav.Link>Indu_Design</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Mine_CS">
                    <Nav.Link>Mine_CS</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Mineac">
                    <Nav.Link>Mineac</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Nmic">
                    <Nav.Link>Nmic</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Petro_CS">
                    <Nav.Link>Petro_CS</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Safety_DA">
                    <Nav.Link>Safety_DA</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Safety_Hunt">
                    <Nav.Link>Safety_Hunt</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Online Events" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <LinkContainer to="/Events/T_Shirt_Design">
                    <Nav.Link>T_Shirt_Design</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Quiz_Spiel">
                    <Nav.Link>Quiz_Spiel</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <LinkContainer to="/Events/Mine_Shot">
                    <Nav.Link>Mine_Shot</Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
