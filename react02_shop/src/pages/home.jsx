import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import ProductItem from '../components/productItem';
import Data from '../data.js';

// MUI
import Button from '@mui/material/Button';

function Home() {
    let [shoes, setShoes] = useState(Data);
    console.log(shoes);

    function sortGanada() {
        let copy = [...shoes];
        copy.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
        setShoes(copy)
    }

    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="/">KCT 전자상가 Codespaces!</Navbar.Brand>
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
                <Button variant="outlined" onClick={sortGanada}>가나다순 정렬</Button>
                <div className="products-list">
                {
                    shoes.map((item) => (
                        <ProductItem 
                        image = {item.id}
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