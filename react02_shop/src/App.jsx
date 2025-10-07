import React from 'react';
import Router from './Router';
import './assets/css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {

  return (
    <div className="app">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
          <Navbar.Brand href="/">KCT 전자상가</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">Detail</Nav.Link>
              <Nav.Link href="/cart">장바구니</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>

      <Router />
    </div>
  )
}

export default App;