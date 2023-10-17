import React, {useEffect} from "react";
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
        "Notice" : {
            "Notice": Notice
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
                <div className="p-0 bg-transparent text-white border-start-0 align-self-center" onClick={() => { navigate('/account') }} style ={{marginRight:'7rem', marginLeft : '7rem', }}>
                    <p style={{fontSize : 'small'}}>Welcome, {localStorage.getItem('firstName')}</p>
                    <h3 style={{fontSize : 'medium', marginTop : '-.6rem'}}>Account & Orders</h3>
                </div>
            )
        } else {
            return (
                <div className="p-0 bg-transparent text-white border-start-0 mt-1 align-middle" onClick={() => {
                    navigate('/login');
                }}>
                    <h3 style={{fontSize : 'medium', marginTop : '-.6rem', backgroundColor: '#447e3a', padding : '1rem', borderRadius : '.2rem', cursor: 'pointer'}}>Sign in / Register</h3>
                </div>
            )
        }
    }

   
const IconsToRender = Object.keys(iconsNavigation).map(iconKey => {
    if(iconKey === "Notice") {
        return (
            // <div className="dropdown d-flex flex-row">
                <Icon name='name' icon={iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action={Object.keys(iconsNavigation[iconKey])[0]} title={iconKey} />
            // </div>
);
}
return <Icon name='name' icon={iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action={Object.keys(iconsNavigation[iconKey])[0]} title={iconKey} className ="d-flex flex-row" />;
})

return (
    <nav className="navbar navbar-expand-lg bg-success bg-gradient p-0">
        <Link to="/" className="navbar-brand text-white align-self-center p-0" style={{marginLeft:'4rem'}}>The College Market</Link>
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
          <ul className="navbar-nav mt-2">
            <li className="nav-item m-0">
                {/* <SignInHandler /> */}
            </li>
            <li className="nav-item searchContainer m-0">
              <div className="col-900 d-flex flex-row mt-2">
                <input class="form-control align-self-center" type="search" placeholder="Search..." aria-label="Search" style={{width:'30em', height:'2rem'}}/>
                <button class="btn text-white p-0 border-white align-self-center" type="submit" style={{width: '5rem', marginRight:'7rem', marginLeft : '1rem'}}>Search</button>
              </div>
            </li>
            <li className="nav-item iconContainer m-0">
              <div className="navbar-nav d-flex align-items-center">
                {IconsToRender}
              </div>
            </li>
          </ul>
        </div>
    </nav>
    )

}

export default Navigation;
