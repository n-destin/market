import React from "react";
import { Link } from "react-router-dom";
import "./accountNavigationCss.css";

const AccountNavigation = (props)=>{
    return(
<<<<<<< HEAD
        <div className="account_navigation">
            <Link to={`/`} className = "accountLinks">The College Market</Link>
=======
        <div className="account_navigation" style={{
            backgroundColor : 'rgb(29, 65, 29)',
            color: 'white',
        }}>
            <Link to={`/`} className = "accountLinks">The Dartmouth market</Link>
>>>>>>> safe
            <div className="rightLinks">
                {Object.keys(props.navContent).map(content=>{
                    return(
                        <Link to = {(props.navContent[content])} className = "accountLinks">{content}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AccountNavigation;