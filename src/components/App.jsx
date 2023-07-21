import React from "react";
import Navigation from "./navigation/navigation";
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
                <Route path="/account" element = {<Account />}/>
                <Route path="account/messages" element = {<ChatRoom />}/>
                <Route path="account/Cart" element ={<Cart />}/>
                <Route path="/login" element ={<Login />} />
                <Route path="/signup" element ={<SingUp/>} />
                <Route path="/support" element = {<ContactSupportPage />}/>
                <Route path ="/chat" element ={<Chat/>}/>
                <Route path="/sell" element ={<CreateProduct/>}/>
                <Route path="/transactions" element ={<TransactionDashboard />}/>
                <Route path="/checkout" element ={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;