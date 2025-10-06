import React from "react";
import { Routes, Route } from "react-router-dom";
import Data from './data.js';

import Home from "./pages/home";
import Detail from "./pages/detail";
import Cart from './pages/cart';


const Router = () => {
    let [shoes] = React.useState(Data);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default Router;