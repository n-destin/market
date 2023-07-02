import React from "react";
import './navigation.css'
import inbox from '../../images/message.png'
import cart from '../../images/cart.png'
import donation from '../../images/donation.png'
import tradein from '../../images/sell.png'
import account from '../../images/account.png'
import { Link } from "react-router-dom";
import Icon from "../../components/icon";
import Subnavigation from "./subnavigation";
import { useState } from "react";

const Navigation = (props) =>{
    let iconsNavigations = {' My messages' : inbox, "Donate": donation, "Sell" : tradein, "Account": account, "Cart" : cart}

    const iconsNavigation = {
        "My messages" : {
            "account/messages" : inbox
        },
        "Donate" : {
            "donation" : donation,
        },
        "Sell" : {
            "sell" : tradein
        },
        "My account" : {
            "account" : account
        },
        "Cart" : {
            "account/cart" : cart
        }
    }

    const IconsToRender = Object.keys(iconsNavigation).map(iconKey=>{
        console.log(Object.keys(iconsNavigation[iconKey])[0]);
        return <Icon name = 'name' icon = {iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action = {Object.keys(iconsNavigation[iconKey])[0]} title = {iconKey}/>
    })
    return  (
        <div className='navigationBar'>
            <div className="iconbar">
                <div className="logo">
                    <Link to = "/" className="linking">The Dartmouth Market</Link>
                </div>
                    <div className="searchinput">
                    <input type="text" className="overflow-y-auto p-4 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 mt-5 ml-5 mr-5 blur-gradient max-w-[50vw]" />
                </div>
                <div className="icons">
                    {IconsToRender}
                </div>
            </div>
            <div className="classification">
                
            </div>
            <Subnavigation />
        </div>
    )
}

export default Navigation;