import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './subnavigation.css';
import productCategories from '../../categories/productCategories.json';

const Subnavigation = () => {

    const navigate =  useNavigate();
    const links = Object.keys(productCategories).map(element => (
        <Link key={element} onClick = {()=>{navigate(`category/${productCategories[element]}`)}} className="sub-link">
            <p className="subLink">{element}</p>
        </Link>
    ));

    console.log(productCategories);

    return (
        <div className='subnavigation'>
            <div className="centerWrapper">
                <div className="category-container">
                    {links}
                </div>
            </div>
        </div>
    );
}

export default Subnavigation;
