import React from "react";
import { useState } from "react";
import menu from '../../images/menu.png'
import { Link, useNavigate } from "react-router-dom";
import './subnavigation.css'
import productCategories from '../../categories/productCategories.json'

const Subnavigation = (props)=>{

    const links = Object.keys(productCategories).map(element =>{
        return (<Link to={`/category/${productCategories[element]}`} className ="text-decoration-none"><p className="text-green-50 align-middle" style={{color: 'green'}}>{element}</p></Link>)
    })

    return(
        <div className='subnavigation'>
            <div className="navbar d-flex flex-row" style={{paddingRight : '2rem', paddingLeft : '2rem', backgroundColor : '#EFF5EE', height : '4vh'}}>
                {links}
            </div>
        </div>
    )
}

export default Subnavigation;
