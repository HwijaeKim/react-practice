import React from "react";
import ProductItem from "../components/productItem";

function Detail() {
    return (
        <div className="detail">
            <div className="container-lg">
                <div className="products-list">
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}

export default Detail;