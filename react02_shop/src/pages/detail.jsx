import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import TabContent from '../components/tabContent';
import { addCart } from '../store';
import Cart from '../pages/cart';
import { useLike } from "../hooks/like";

// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useQueryClient } from "@tanstack/react-query";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';



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
        let watched = localStorage.getItem('watched');
        // const currentItem = { id };
        if (!watched) {
            watched = [];
        } else {
                watched = JSON.parse(watched);
        }
        let set = new Set(watched);
        set.add(Number(id));
        localStorage.setItem('watched', JSON.stringify(Array.from(set)));
        console.log(set);
    }, [id]);

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

    // let [count, setCount] = useState(0)
    let dispatch = useDispatch();

    let [like, toggleLike] = useLike();


    return (
        <div className="detail">

            {/* <YellowBtn bg="yellow" >버튼</YellowBtn>
            <YellowBtn bg="blue">버튼</YellowBtn> */}


            {modal && (
                <Stack sx={{ width: '95%', margin: '16px auto' }} spacing={2}>
                    <Alert severity="warning">2초 뒤 사라집니다!</Alert>
                </Stack>
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
                    {/* <TextField id="standard-basic" label="숫자만 입력하세요" variant="standard" value={number} onChange={typeNumber} /> */}
                    <Button variant="contained" onClick={() => {
                        dispatch(addCart(props.shoes[id]));
                    }}>구입하기</Button>

                    <div className="like">
                        <span>{like}</span>
                        <FavoriteIcon onClick={() => {toggleLike()}}></FavoriteIcon>
                    </div>
                </div>
            </div>

            <TabContent shoes={props.shoes} />

            <Cart />
        </div>
    )
}

export default Detail;