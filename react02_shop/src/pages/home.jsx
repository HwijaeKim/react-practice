import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from '../components/productItem';
import WatchedItem from '../components/watchedItem';
import Data from '../data.js';
import axios from 'axios';

// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';

function Home() {
    let [shoes, setShoes] = useState(Data);
    let [moreBtnCount, setMoreBtnCount] = useState(0);
    let [loading, setLoading] = useState(false);
    let [watched, setWatched] = useState([]);
    console.log(shoes);

    useEffect(() => {
        if(localStorage.getItem('watched')) {
            return;
            
        } else {
            localStorage.setItem('watched', JSON.stringify([]));
        }
    }, []) // 빈 배열을 넣어 컴포넌트 마운트 시 한 번만 실행되도록 수정

    useEffect(() => {
        let get = localStorage.getItem('watched');
        if (get) {
            setWatched(JSON.parse(get));
        }
    }, [])

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


    // useQuery({
    //     queryKey: ['작명'],
    //     queryFn: () => {

    //     }
    // })



    return (
        <div className="app">

            <div className="main-bg"></div>

            <div className="container-lg">
                <Button variant="outlined" onClick={sortGanada}>가나다순 정렬</Button>
                <div className="products-list">
                {
                    shoes.map((item) => (
                        <ProductItem 
                        key = {item.id}
                        image = {item.id}
                        title = {item.title}
                        content = {item.content}
                        price = {item.price}
                        href = {'/detail/' + item.id}
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

            <br></br><br></br>

            <div className="container-lg">
                <h3>최근 본 상품</h3>
                <div className="products-list">
                    {watched &&
                        watched.map((item) => {
                            return (
                                <WatchedItem 
                                key = {item}
                                id = {item}
                                shoes={shoes}
                                />
                            )
                        })
                    }
                </div>
            </div>

            
        </div>
    )
}

export default Home;