import React from "react";
import Navigation from "./navigation/navigation";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css'
import Products from "./productActions/products";
import Login from "./Login";
import SingUp from "./craeteAccount";
import Chat from "./chat/chat";
import CreateProduct from "./productActions/createProduct";
import ProductPage from "./productActions/productPart";
import Cart from "./cart";
import { useState } from "react";
import Account from "./personal/account";

function App (props){

    const [displayNav, setDisplayNav] = useState(true);
    let navClass = 'navigationBar';
    (displayNav)? navClass = 'navigationBar' : navClass = 'nonDisplay'

    // function changeDisplay () {
    //     setDisplayNav(false);
    // };


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products/:id" element ={<ProductPage/>}/>
                <Route  path="/" element = {<Products/>} />
                <Route path="/Account" element = {<Account />}/>
                <Route path="/Cart" element ={<Cart />}/>
                <Route path="/login" element ={<Login />} />
                <Route path="/signup" element ={<SingUp/>} />
                <Route path ="/chat" element ={<Chat/>}/>
                <Route path="/Sell" element ={<CreateProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;