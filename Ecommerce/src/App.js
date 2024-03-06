import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
          <Nav className="mr-auto d-flex justify-content-end">
            <Nav.Link href="#home" className="text-light">
              HOME
            </Nav.Link>
            <Nav.Link href="#store" className="text-light">
              STORE
            </Nav.Link>
            <Nav.Link href="#about" className="text-light">
              ABOUT
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart" className="text-light">
              Cart <span className="cart-number">0</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="mt-1 p-5 bg-success text-center">
        <Row>
          <Col>
            <h1 className="display-3">The Generics</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        {productsArr.map((product, index) => (
          <Row key={index}>
            <Col>
              <h2>{product.title}</h2>
              <Image
                src={product.imageUrl}
                className="mb-3"
                alt={product.title}
              />
              <span>{product.price}</span>
              <Button type="button" className="mt-3">
                Add to cart
              </Button>
            </Col>
          </Row>
        ))}
      </Container>

      <footer>
        <Container fluid flex className="text-center bg-secondary text-dark p-1">
          <h1 className="display-3 mb-1">The Generics</h1>
          <div>
            <img
              src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
              alt="Youtube Logo"
              className="mr-3"
              width="150px"
              height="95px"
            />
            <img
              src="https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png"
              alt="Spotify Logo"
              className="mr-3"
              width="150px"
              height="95px"
            />
            <img
              src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
              alt="Facebook Logo"
              width="150px"
              height="95px"
            />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
