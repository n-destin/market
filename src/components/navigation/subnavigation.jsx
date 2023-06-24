import React from "react";
import { useState } from "react";
import menu from '../../images/menu.png'
import { Link } from "react-router-dom";
import './subnavigation.css'

const Subnavigation = (props)=>{

    const right = ['Donations', 'Orders', 'deals'].map(element =>{
        return (<Link to={`${element}`} className ="sub-link">{(element === 'Orders')? 'Your Orders' : (element === 'deals')? 'Quick Deals': element}</Link>)
    })
    const left = ['women', 'men'].map(left=>{
        return <Link to={`${left}`} className ="sub-link">{`For ` + left}</Link>
    })


    return(
        <div className="subnavigation">
            <div className="right">
                <img src={menu} alt="menu-icon" className="menu-image"/>
                {left}
            </div>
            <div className="left">
                {right}
            </div>
        </div>
    )
}

export default Subnavigation;
