import React from "react";
import { useState } from "react";
import menu from '../../images/menu.png'
import { Link } from "react-router-dom";
import './subnavigation.css'
import productCategories from '../../categories/productCategories.json'

const Subnavigation = (props)=>{

    const right = Object.keys(productCategories).map(element =>{
        return (<Link to={`${productCategories[element]}`} className ="sub-link">{element}</Link>)
    })

    console.log(productCategories);

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
