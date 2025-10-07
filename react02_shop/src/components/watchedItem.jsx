import React from 'react';
// import Data from './data.js';
import { useNavigate } from 'react-router-dom';

function WatchedtItem(props) {
    const navigate = useNavigate();
    const product = props.shoes.find(item => item.id === props.id);
    console.log(props.shoes)

    if (!product) {
        return null; // product가 없으면 아무것도 렌더링하지 않음
    }

    return (
        <div className="product" onClick={() => navigate('/detail/' + product.id)}>
            <img src={'../src/assets/product'+product.id+'.png'} width="80%" />
            <h4>{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price} KRW</p>
        </div>
    )
}

export default WatchedtItem;