import React from "react";
import {useParams} from "react-router-dom"
import ProductItem from "../components/productItem";
import { Navbar, Container, Nav } from 'react-bootstrap';

function Detail(props) {
    let {id} = useParams();
    console.log(id);

    return (
        <div className="detail">
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


            <div className="detail__product">
                <div className="detail-flex">
                    <img src={'../src/assets/product' + id + '.png' } />
                </div>
                <div className="detail-flex text">
                <h4 className="title">{props.shoes[id].title}</h4>
                <p className="content">{props.shoes[id].content}</p>
                <p className="price">{props.shoes[id].price} KRW</p>
                <button className="buy-button">구입</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;