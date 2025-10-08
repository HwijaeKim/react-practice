import React from 'react';
import Router from './Router';
import './assets/css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function App() {

  let result = useQuery({
    queryKey: ['getName'],
    refetchOnWindowFocus: false,
    retry: 2,
    queryFn: () => 
      axios.get('https://codingapple1.github.io/userdata.json')
      .then(response => response.data)
  })
  console.log(result);

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
          <Nav className="ms-auto">
            { result.isPending && '받아들이는 중' }
            { result.isError && '에러!!' }
            { result.isSuccess && '반갑습니다. ' + result.data.name }
          </Nav>
          </Container>
      </Navbar>

      <Router />
    </div>
  )
}

export default App;