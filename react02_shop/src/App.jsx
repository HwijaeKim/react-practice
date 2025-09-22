import {useState} from 'react'
// import './App.css'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown, CarouselItem } from 'react-bootstrap';
import Product1 from './assets/product01.png';
import ProductItem from './components/productItem';
import Data from './data.js';

function App() {
  let [shoes] = useState(Data);
  console.log(shoes);

  return (
    <div className="app">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">KCT 전자상가</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="products-list">
          {
            shoes.map(item => (
                <ProductItem 
                  image = {Product1}
                  title = {item.title}
                  content = {item.content}
                  price = {item.price}
                />
            ))
          }
        </div>
      </div>
    
    </div>
  )
}

export default App;