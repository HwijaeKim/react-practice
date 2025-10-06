import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap';
import TabContent from '../components/tabContent';
// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


// import styled from 'styled-components';

// let YellowBtn = styled.button`
//     background: ${ props => props.bg };
//     color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
//     padding: 10px;
// `

// let NewBtn = styled.button(YellowBtn)

// let Box = styled.div`
//     background: gray;
//     padding: 20px;
// `

function Detail(props) {
    let {id} = useParams();
    // console.log(id);

    let [modal, setModal] = useState(true);
    let [number, setNumber] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 2000)
        console.log(2);
        return () => {
            console.log(1);
            clearTimeout();
        };
    }, [])

    
    useEffect(() => {
        // isNumber(number)
    }, [number]);

    const typeNumber = e => {
        const value = e.target.value;
        setNumber(value);
        isNumber(value);
    }

    const isNumber = (v) => {
        let num = String(v);
        if(!/^[0-9]+$/.test(num)) {
            alert('숫자만 입력하세요.');
            setNumber('');
            return false;
        }
        return true;
    }

    let [count, setCount] = useState(0)

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
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <YellowBtn bg="yellow" >버튼</YellowBtn>
            <YellowBtn bg="blue">버튼</YellowBtn> */}


            {modal && (
                <Box component="section" sx={{ p: 2, border: '1px dashed grey', margin: '20px' }}>
                    2초 뒤 사라입니다!
                </Box>
            )}


            <div className="detail__product">
                <div className="detail-flex">
                    <img src={'../src/assets/product' + id + '.png' } />
                </div>
                <div className="detail-flex text">
                <h4 className="title">{props.shoes[id].title}</h4>
                <p className="content">{props.shoes[id].content}</p>
                <p className="price">{props.shoes[id].price} KRW</p>
                {/* <button className="buy-button">구입</button> */}
                <TextField id="standard-basic" label="숫자만 입력하세요" variant="standard" value={number} onChange={typeNumber} />
                <Button variant="contained" onClick={() => {setCount(count+1)}}>구입하기</Button>
                </div>
            </div>

            <TabContent shoes={props.shoes} />
        </div>
    )
}

export default Detail;