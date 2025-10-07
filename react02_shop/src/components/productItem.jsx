import React from 'react';
// import Data from './data.js';
import { useNavigate } from 'react-router-dom';

function ProductItem(props) {
    const navigate = useNavigate();
    return (
        <div className="product" onClick={() => navigate(props.href)}>
            <img src={'../src/assets/product'+props.image+'.png'} width="80%" />
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <p>{props.price} KRW</p>
        </div>
    )
}

export default ProductItem;