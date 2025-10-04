import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import ProductItem from '../components/productItem';
import Data from '../data.js';

function Home() {
    let [shoes] = useState(Data);
    console.log(shoes);

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
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="main-bg"></div>

            <div className="container-lg">
                <div className="products-list">
                {
                    shoes.map((item, i) => (
                        <ProductItem 
                        image = {i}
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

export default Home;