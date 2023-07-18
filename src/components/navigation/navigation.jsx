import React from "react";
import './navigation.css'
import inbox from '../../images/message.png'
import cart from '../../images/cart.png'
import donation from '../../images/donation.png'
import tradein from '../../images/sell.png'
import account from '../../images/account.png'
import support from '../../images/support.png'
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../components/icon";
import Subnavigation from "./subnavigation";
import { useState } from "react";

const Navigation = (props) =>{
    let iconsNavigations = {' My messages' : inbox, "Donate": donation, "Sell" : tradein, "Account": account, "Cart" : cart}
    const [person, setPerson ] = useState();

    const navigate  = useNavigate();
    const iconsNavigation = {
        "Inbox" : {
            "account/messages" : inbox
        },
        "Donate" : {
            "sell" : donation,
        },
        "Sell" : {
            "sell" : tradein
        },
        "Support" : {
            "support" : support
        },
        "Cart" : {
            "account/cart" : cart
        }
    }

    const SignInHandler = ()=>{
        if(localStorage.getItem('userToken')){
            console.log('hrer');
            return(
                <div className="loggedIn" onClick={()=>{navigate('/account')}}>
                    <p>Hello</p>
                    <h3>{person.firstName}</h3>
                </div>
            )
        } else{
            return(
                <div className="notLoggedIn" onClick={()=>{
                    navigate('/account');
                }}>
                    <img src={account} alt="" className="account-image"/>
                    <div className="navBeside">
                        <p>Sign in / Register</p>
                        <h3>Account & Orders</h3>
                    </div>
                </div>
            )
        }
    }

    const IconsToRender = Object.keys(iconsNavigation).map(iconKey=>{
        console.log(Object.keys(iconsNavigation[iconKey])[0]);
        return <Icon name = 'name' icon = {iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action = {Object.keys(iconsNavigation[iconKey])[0]} title = {iconKey}/>
    })
    return  (
        <div className='navigationBar bg-lime-800 flex flex-row'>
            <div className="iconbar">
                <div className="logo">
                    <Link to = "/" className="linking">The Dartmouth Market</Link>
                </div>
                <SignInHandler />
                <div className="searchDiv">
                    <input type="text" className="searchBar" />
                    <button className="searchButton"><i className="fa fa-search"></i></button>
                </div>
                <div className="icons">
                    {IconsToRender}
                </div>
            </div>
            <Subnavigation />
        </div>
    )
}

export default Navigation;