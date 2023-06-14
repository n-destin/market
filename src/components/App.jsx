import React from "react";
import Navigation from "./navigation";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css'
import Products from "./Products";
import SignUp from "./signup";

function App (props){
    return (
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route  path="/" element = {<Products/>} />
                <Route path="/signup" element ={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;