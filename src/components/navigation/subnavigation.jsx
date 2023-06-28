import React from "react";
import { useState } from "react";
import menu from '../../images/menu.png'
import { Link } from "react-router-dom";
import './subnavigation.css'

const Subnavigation = (props)=>{

    const right = [ 'orders', 'deals', 'Electronics', 'Sports & Leisure', 'Fashion & Accessories', 'Art & Collectibles', 'Automotive', 'Community', 'Free & Donations', 'men', 'women',
].map(element =>{
        return (<Link to={`${element}`} className ="sub-link">{(element === 'men')? 'For men' : (element === 'women')? 'For women': (element === 'orders')? 'Your Orders': (element === 'deals')? 'Quick Deals' :  element}</Link>)
    })



    return(
        <div className='subnavigation'>
            <div className="right">
                <img src={menu} alt="menu-icon" className="menu-image"/>
                {right}
            </div>
        </div>
    )
}

export default Subnavigation;
