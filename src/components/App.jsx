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

function App (props){
    return (
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path="/products/:id" element ={<ProductPage/>}/>
                <Route  path="/" element = {<Products/>} />
                <Route path="/Cart" element ={<Cart />}/>
                <Route path="/login" element ={<Login />} />
                <Route path="/signup" element ={<SingUp/>} />
                <Route path ="/chat" element ={<Chat/>}/>
                <Route path="/Trade" element ={<CreateProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;