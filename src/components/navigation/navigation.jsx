import React, {useEffect} from "react";
// import './navigation.css'
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
                    <p style={{fontSize : 'small'}}>Welcome, {localStorage.getItem('firstName')}</p>
                    <h3 style={{fontSize : 'medium', marginTop : '-.6rem'}}>Account & Orders</h3>
                </div>
            )
        } else {
            return (
                <div className="p-0 bg-transparent text-white border-start-0 mt-1 align-middle" onClick={() => {
                    navigate('/login');
                }}>
                    {/* <img src={account} alt="" className="account-image m-2" /> */}
                    <h3 style={{fontSize : 'medium', marginTop : '-.6rem', backgroundColor: '#447e3a', padding : '1rem', borderRadius : '.2rem', cursor: 'pointer'}}>Sign in / Register</h3>
                    {/* <div className="navBeside">
                        <p className="sign-in-text"></p>
                    </div> */}
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
    <nav className="navbar navbar-expand-lg bg-success bg-gradient">
        <Link to="/" className="navbar-brand text-white">The College Market</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <SignInHandler />
            </li>
            <li className="nav-item searchContainer">
              <div className="col-900 d-flex flex-row">
                <input class="form-control" type="search" placeholder="Search..." aria-label="Search" />
                <button class="btn" type="submit">Search</button>
              </div>
            </li>
            <li className="nav-item iconContainer">
              <div className="navbar-nav d-flex">
                {IconsToRender}
              </div>
            </li>
          </ul>
        </div>
    </nav>
    )

}

export default Navigation;
