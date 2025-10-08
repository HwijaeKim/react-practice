import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Data from './data.js';

import Home from "./pages/home";
// import Detail from "./pages/detail";
// import Cart from './pages/cart';
const Detail = lazy(() => import('./pages/detail.jsx'));
const Cart = lazy(() => import('./pages/cart.jsx'));
import Test from './pages/test';


const Router = () => {
    let [shoes] = useState(Data);

    return (
        <Suspense fallback={<div>받아들이는 중...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Suspense>
    )
}

export default Router;