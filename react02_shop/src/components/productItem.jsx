import React from 'react';
// import Data from './data.js';

function ProductItem({
    image = '',
    title = '타이틀 입력',
    content = '콘텐츠 입력',
    price = 0
}) {

    return(
        <div className="product">
            <img src={'../src/assets/product'+image+'.png'} width="80%" />
            <h4>{title}</h4>
            <p>{content}</p>
            <p>{price} KRW</p>
        </div>
    )
}

export default ProductItem;