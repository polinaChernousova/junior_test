import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { Image, Row } from "react-bootstrap";

function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Test</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Nav
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Row className="card p-2" style={{ width: "300px" }}>
                    <Image
                      className="avatar"
                      src="https://avatars.mds.yandex.net/i?id=45d93b2a3a62f603aeac326de21af9509dce9fbf-8750458-images-thumbs&n=13"
                      alt="Avatar"
                      roundedCircle
                      style={{
                        width: "200px",
                        height: "200px",
                        marginRight: "10px",
                      }}
                    />
                    <span className="name font-weight-bold">Polina</span>
                    <span className="name font-weight-bold">
                      polinacernousova66@gmail.com
                    </span>
                  </Row>
                  <NavLink to="/">Posts</NavLink>
                  <NavLink to="/about">About</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
