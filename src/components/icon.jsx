import React from "react";
import { Link } from "react-router-dom";
const Icon = (props)=>{

    

    return(
        <div className="icon">
            <Link className="link" to={`/${props.action}`}> 
            <img src={props.icon} alt = {`${props.name}-icon`} />
            <p>{props.action}</p></Link>
        </div>
    )
}

export default Icon;