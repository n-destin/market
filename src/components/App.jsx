import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css'
import Products from "./productActions/products";
import Login from "./Login";
import SingUp from "./craeteAccount";
import Chat from "./chat/chat";
import CreateProduct from "./productActions/createProduct";
import ProductPage from "./productActions/productPage";
import Cart from "./productActions/cart";
import { useState } from "react";
import Account from "./personal/account";
import ChatRoom from "./personal/chatRoom";
import TransactionDashboard from "./personal/transactions";
import ContactSupportPage from "./productActions/support";
import Checkout from "./productActions/checkout";
import Category from '../components/productActions/categoryPage'
import RequireAuthentication from "./requireAuthentication";

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
                <Route path={`/category/:category_name`} element = {<Category />}/>
                <Route path="/account" element = {<RequireAuthentication><Account /></RequireAuthentication>}/>
                <Route path="account/messages" element = {<RequireAuthentication><ChatRoom /></RequireAuthentication>}/>
                <Route path="account/Cart" element ={<RequireAuthentication><Cart /></RequireAuthentication>}/>
                <Route path="/login" element ={<Login />} />
                <Route path="/signup" element ={<SingUp/>} />
                <Route path="/support" element = {<ContactSupportPage />}/>
                <Route path ="/chat" element ={<RequireAuthentication><Chat/></RequireAuthentication>}/>
                <Route path="/sell" element ={<RequireAuthentication><CreateProduct/></RequireAuthentication>}/>
                <Route path="/transactions" element ={<RequireAuthentication><TransactionDashboard /></RequireAuthentication>}/>
                <Route path="/checkout" element ={<RequireAuthentication><Checkout/></RequireAuthentication>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;