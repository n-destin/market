import React from "react";
import { Link } from "react-router-dom";
const Icon = (props)=>{
    return(
        <div className="nav-item" style ={{padding : '0 3.2vw 0 0vw', alignSelf : 'center', justifySelf: 'center'}}>
            <Link className="link text-decoration-none text-white link-hover" to={`/${props.action}`}> 
            <img src={props.icon} alt = {`${props.name}-icon`} style = {{height : '1.1rem'}}/>
            <p className="iconText">{props.title}</p></Link>
        </div>
    )
}

export default Icon;