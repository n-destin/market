import React from "react";
import { Link } from "react-router-dom";
import "./accountNavigationCss.css";

const AccountNavigation = (props)=>{
    return(
        <div className="navbar" style={{
            backgroundColor : 'rgb(29, 65, 29)',
            color: 'white',
        }}>
            <Link to={`/`} className = "navbar-brand ml-5 text-white">The College market</Link>
            <div className="navbar-nav d-flex flex-row mt-3">
                {Object.keys(props.navContent).map(content=>{
                    return(
                        <Link to = {`/${(props.navContent[content])}`} className = "accountLinks">{content}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AccountNavigation;