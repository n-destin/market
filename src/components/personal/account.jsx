import React from "react";
import { Link } from "react-router-dom";
import profileHolder from '../../images/profileHolder.jpeg'

const Account = (props)=>{

    const Email = 'destin.niyomufasha.26@dartmouth.edu'
    const Profile = null;
    const PhoneNumber = 'phone number here';
    const userId = 'Here is a user Id mayeb'

    const personalLinksFunctions = {
        "Personal information" : {
            "My profile" : function(){},
            "Upload profile picture" : function(){},
            "Email preferences" : function(){},
            "Privavy settings" : function(){}
        },
        "Security information ": {
            'Change email adress' : function(){console.log('something to be called');},
            'Change Password' : function(password){console.log(password)},
            'Set security Questions ' : function(){console.log('setting security questions');},
            'Manage verifications Phones'  :  function(){console.log('managing phones');},
            'Manage connected accounts' : function(){console.log('managing account');}
        },
        "Finance information" : {
            "My transactions" : function(){}
        }
    }

    const AccountNavigation = (props)=>{
        return(
            <div className="account_nativation">
                <Link to={`/`} className = "accountLinks">The Dartmouth market</Link>
                <div className="rightLinks">
                    <Link to={`/Account/messages`}  className = "accountLinks">Messasges</Link>
                    <Link to={`Account/trading_index `}  className = "accountLinks">My trading dashboard</Link>
                </div>
            </div>
        )
    }
    // console.log(personalLinksFunctions);

    const returnComponents = Object.keys(personalLinksFunctions).map(key=>{
        return (
            <div className="detail">
                <h4 className="head_content">{key}</h4>
                <hr className="horizontaldetail"/>
                {Object.keys(personalLinksFunctions[key]).map(component =>{
                    return <Link className="link">{component}</Link>
                })}
            </div>
        )
        
    });
    // console.log();
    
    console.log(returnComponents);

    return(
        <div>
            <AccountNavigation />
            <div className="accountPage">
                <div className="accountCard">
                    <div className="heading">
                        <div className="partOne">
                            <img src={(Profile)? Profile : profileHolder} alt="personalImage" height='90%' className="profileImage"/>
                        </div>
                        <div className="partTwo">
                            <h4 className="head_content">Your member id:  <span className="userId">{userId}</span></h4>
                            <h4  className="head_content">Email :  <span className="spanning_element_email">{Email}<Link className="changeButton">Change emial address</Link></span></h4>
                            <h4  className="head_content">Linked Mobile: <span className="spanning_element">{PhoneNumber}<Link className="changeButton">Change phone number</Link></span></h4>
                        </div>
                    </div>
                    <hr className="horizontal"/>
                    <div className="details">
                        {returnComponents}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;