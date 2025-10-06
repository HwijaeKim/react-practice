import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import ProductItem from '../components/productItem';
import Data from '../data.js';
import axios from 'axios';

// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Home() {
    let [shoes, setShoes] = useState(Data);
    let [moreBtnCount, setMoreBtnCount] = useState(0);
    let [loading, setLoading] = useState(false);
    console.log(shoes);

    function sortGanada() {
        let copy = [...shoes];
        copy.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
        setShoes(copy)
    }

    function fetchProducts() {
        if(moreBtnCount === 0) {
            setLoading(true);
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((response) => {
                console.log(response.data);
                let copy = [...shoes, ...response.data];
                // copy.push(...response.data);
                setShoes(copy);
                setLoading(false);
                setMoreBtnCount(1);
            })
            .catch((error) => {
                console.error('요청에 실패' + error);
                setLoading(false);
                alert('실패한 요청: ' + error);
            })
        } else if(moreBtnCount === 1) {
            setLoading(true);
            axios.get('https://codingapple1.github.io/shop/data3.json')
            .then((response) => {
                console.log(response.data);
                let copy = [...shoes, ...response.data];
                // copy.push(...response.data);
                setShoes(copy);
                setLoading(false);
                setMoreBtnCount(2);
            })
            .catch((error) => {
                console.error('요청에 실패' + error);
                setLoading(false);
                alert('실패한 요청: ' + error);
            })
        } else if(moreBtnCount === 2) {
            alert('더이상 로드할 상품이 없습니다.');
        }

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
                {loading && (
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey', margin: '20px', textAlign: 'center' }}>
                        받아들이는 중
                    </Box>
                )}
                <Button variant="contained" onClick={fetchProducts} >더 불러오기</Button>
            </div>
            
        </div>
    )
}

export default Home;