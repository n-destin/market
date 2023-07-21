import React from "react";
import { useState } from "react";
import menu from '../../images/menu.png'
import { Link, useNavigate } from "react-router-dom";
import './subnavigation.css'
import productCategories from '../../categories/productCategories.json'

const Subnavigation = (props)=>{

    const links = Object.keys(productCategories).map(element =>{
        return (<Link to={`/category/${productCategories[element]}`} className ="sub-link"><p className="subLink">{element}</p></Link>)
    })

    return(
        <div className='subnavigation'>
            <div className="right">
                <img src={menu} alt="menu-icon" className="menu-image"/>
                {links}
            </div>
        </div>
    )
}

export default Subnavigation;
