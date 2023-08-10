import React from "react";
import './navigation.css'
import inbox from '../../images/message.png'
import cart from '../../images/cart.png'
import donation from '../../images/donation.png'
import tradein from '../../images/sell.png'
import account from '../../images/account.png'
import support from '../../images/support.png'
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../components/icon";
import Subnavigation from "./subnavigation";
import { useSelector } from "react-redux";


const Navigation = (props) =>{
    let iconsNavigations = {' My messages' : inbox, "Donate": donation, "Sell" : tradein, "Account": account, "Cart" : cart}
    // const [person, setPerson ] = useState();

    const authenticated = useSelector((store)=>{return store.user.authenticated})
    console.log(authenticated);

    const navigate  = useNavigate();
    const iconsNavigation = {
        "Inbox" : {
            "account/messages" : inbox
        },
        "Donate" : {
            "sell" : donation,
        },
        "Sell" : {
            "sell" : tradein
        },
        "Support" : {
            "support" : support
        },
        "Cart" : {
            "account/cart" : cart
        }
    }

    const SignInHandler = ()=>{
        if(authenticated){
            return(
                <div className="p-0" onClick={()=>{navigate('/account')}} style = {{height : '80%', alignSelf : 'center'}}>
                    <p style={{fontSize : 'small'}}>Hello, {props.firstName}</p>
                    <h3 style={{fontSize : 'medium', marginTop : '-.6rem'}}>Account & Orders</h3>
                </div>
            )
        } else{
            return(
                <div className="p-0" onClick={()=>{
                    navigate('/login');
                }} style = {{height : '80%'}}>
                    <img src={account} alt="" className="account-image"/>
                    <div className="navBeside">
                        <p>Sign in / Register</p>
                        <h3>Account & Orders</h3>
                    </div>
                </div>
            )
        }
    }

    const IconsToRender = Object.keys(iconsNavigation).map(iconKey=>{
        console.log(Object.keys(iconsNavigation[iconKey])[0]);
        return <Icon name = 'name' icon = {iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action = {Object.keys(iconsNavigation[iconKey])[0]} title = {iconKey}/>
    })


    return  (
        <div className='wholenavigation'>
            <div className="navbar d-flex flex-row justify-start" style={{backgroundColor : 'rgb(29, 65, 29)', color : 'white', height : '7vh'}}>
                <div className="navbar-brand">
                    <Link to = "/" className="text-decoration-none" style={{color : 'white', alignSelf : 'center', paddingLeft : '1rem'}}>The Dartmouth Market</Link>
                </div>
                <SignInHandler />
                <div className="d-flex flex-row">
                    <input type="form-control form-control-md" className="input-class" style={{width:'40vw'}}/>
                    <button className="searchButton"><i className="fa fa-search"></i></button>
                </div>
                <div className="d-flex flex-row">
                    {IconsToRender}
                </div>
            </div>
            <Subnavigation />
        </div>
    )
}

export default Navigation;