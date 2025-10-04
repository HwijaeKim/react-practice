import {React, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from './data.js';

import Home from "./pages/home";
import Detail from "./pages/detail";


const Router = () => {
    let [shoes] = useState(Data);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;