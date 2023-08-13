import React, {useEffect} from "react";
import './navigation.css'
import inbox from '../../images/message.png'
import cart from '../../images/cart.png'
import tradein from '../../images/sell.png'
import account from '../../images/account.png'
import support from '../../images/support.png'
import Notice from "../../images/Notice.png"
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../components/icon";
import Subnavigation from "./subnavigation";
import { useState } from "react";
import Effect from "./effect";
import { useSelector } from "react-redux";

const Navigation = (props) => {
    const [person, setPerson] = useState();
    const authenticated = useSelector(store=>{return store.user.authenticated})

 
    const navigate = useNavigate();
    const iconsNavigation = {
        "Inbox": {
            "account/messages": inbox
        },
        "Notice": {
            "Notice": Notice,
        },
        "Post": {
            "sell": tradein
        },
        "Support": {
            "support": support
        },
        "Cart": {
            "account/cart": cart
        }
    }

    const SignInHandler = () => {
        if (authenticated) {
            return (
                <div className="p-0 bg-transparent text-white border-start-0 m-0" onClick={() => { navigate('/account') }}>
                    <p style={{fontSize : 'small'}}>Welcome, {localStorage.getItem('useName')}</p>
                    <h3 style={{fontSize : 'medium', marginTop : '-.6rem'}}>Account & Orders</h3>
                </div>
            )
        } else {
            return (
                <div className="card p-0" onClick={() => {
                    navigate('/account');
                }}>
                    <img src={account} alt="" className="account-image" />
                    <div className="navBeside">
                        <p className="sign-in-text">Sign in / Register</p>
                    </div>
                </div>
            )
        }
    }

   
const IconsToRender = Object.keys(iconsNavigation).map(iconKey => {
    if(iconKey === "Notice") {
        return (
            <div className="dropdown">
                <Icon name='name' icon={iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action={Object.keys(iconsNavigation[iconKey])[0]} title={iconKey} />
                <div className="nav-item dropdown-content">
                    <Link to="/post-announcement">Post Announcement</Link>
                    <Link to="/view-announcements">View Announcements</Link>
                </div>
            </div>
);
}
return <Icon name='name' icon={iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action={Object.keys(iconsNavigation[iconKey])[0]} title={iconKey} />;
})

return (
    <div className='navbar p-0 bg-lime-800 flex flex-row'>
        <div className="container-fluid iconbar">
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Wrapper" aria-controls="Wrapper" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>     */}
                <Link to="/" className="navbar-brand text-white ml-5 p-0">The College Market</Link>
                <SignInHandler />
                <div className="searchContainer">
                    <div className="searchWrap">
                        <input type="text" className="searchBar" placeholder="Search..." />
                        <button className="searchButton"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="iconContainer">                
                <div className="collapse navbar-collapse d-flex flex-row mt-3" id="Wrapper">
                    <div className="navbar-nav me-0 d-flex flex-row">
                        {IconsToRender}
                    </div>
                </div>
            </div>
        </div>
        <Subnavigation />
        <Effect  />
    </div>
    )

}

export default Navigation;
