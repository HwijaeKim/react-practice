import {useState} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
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
                        image = {'0'+(i+1)}
                        title = {item.title}
                        content = {item.content}
                        price = {item.price}
                        />
                    ))
                }
                </div>
            </div>


            <Link to="/">홈</Link><br />
            <Link to="/detail">상세페이지</Link>
            
        </div>
    )
}

export default Home;