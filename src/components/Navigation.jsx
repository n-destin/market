import React from "react";
import './navigation.css'
import inbox from '../images/message.jpeg'
import cart from '../images/cart.jpeg'
import donation from '../images/donation.png'
import tradein from '../images/trande.png'
import account from '../images/account.png'
import { Link } from "react-router-dom";
import Icon from "./icon";


const Navigation = (props) =>{
    let icons = [inbox, donation, tradein, account, cart]
    const IconsToRender = icons.map(icon=>{
        return <Icon name = 'name' icon = {icon} action = {(icon === inbox) ? 'Inbox' : (icon === donation)? 'Donate' : (icon === tradein)? 'Trade' : (icon === account)? 'Account' : 'Cart'}/>
    })


    return  (
        <div className="navigationBar">
            <div className="iconbar">
                <div className="logo">
                    <Link to = "/" className="link">The Dartmouth Market</Link>
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
        </div>
    )
}

export default Navigation;