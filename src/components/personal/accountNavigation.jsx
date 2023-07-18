import React from "react";
import { Link } from "react-router-dom";

const AccountNavigation = (props)=>{
    return(
        <div className="account_nativation" style={{
            backgroundColor : '#0e5635',
            color: 'white'
        }}>
            <Link to={`/`} className = "accountLinks">The Dartmouth market</Link>
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