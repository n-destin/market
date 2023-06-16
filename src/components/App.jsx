import React from "react";
import Navigation from "./navigation";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css'
import Products from "./Products";
import Login from "./Login";
import SingUp from "./craeteAccount";

function App (props){
    return (
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route  path="/" element = {<Products/>} />
                <Route path="/login" element ={<Login />} />
                <Route path="/signup" element ={<SingUp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;