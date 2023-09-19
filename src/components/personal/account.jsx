import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import profileHolder from '../../images/profileHolder.jpeg'
import AccountNavigation from "./accountNavigation";
import './account.css'; 

const Account = (props) => {
    
    const [Profile, setProfile] = useState();
    const [userId, setUSerid] = useState();

    const navigate =  useNavigate();

    const accountInformation = {
        "Personal Information": {
          "My Profile": "Manage and update your profile details.",
          "Your Lists": "View, modify, or share your lists, or create new ones.",
          "Browsing History": "Review your historical browsing activity.",
          "Request My Information": "Easily retrieve your personal data.",
          "Privacy Settings": "Customize your privacy preferences."
        },
        "Security Information": {
          "Change Email Address": "Update your email address for account communication.",
          "Change Password": "Enhance account security by updating your password.",
          "Close Your Account": "Securely close your account if needed."
        },
        "Financial Information": {
          "My Transactions": "Access a record of your past financial transactions."
        }
      }
      

    const LinkContainer = (props)=>{
        return(
            <div className="card p-2 pb-0 m-2" style={{width : '15rem'}}>
                <h5 className="fs-6 fw-bold">{props.title}</h5>
                <p className="fs-9" style={{fontSize : '.8rem'}}>{props.description}</p>
            </div>
        )
    }

    const returnComponents = Object.keys(accountInformation).map(key => {
        return (
            <div className="detail">
                <h4 className="head_content">{key}</h4>
                <hr className="horizontaldetail" />
                {Object.keys(accountInformation[key]).map(component => {
                    return <LinkContainer title = {component} description = {accountInformation[key][component]}/>
                })}
            </div>
        )

    });
   

    console.log(returnComponents);

    return (
        <div>
            <AccountNavigation navContent={{
                "Messages": 'account/messages',
                "My trading dashboard": "transactions"
            }} />
            <div className="accountPage">
                <div className="card accountCard">
                    <div className="heading">
                        <div className="partOne">
                            <img src={(Profile) ? Profile : profileHolder} alt="personalImage" className="profileImage" />
                        </div>
                        <div className="partTwo">
                            <h4 className="head_content">  Account owner: <span className="spanning_element">{localStorage.getItem('firstName')}</span></h4>
                            <h4 className="head_content">Email :  <span className="spanning_element_email">{localStorage.getItem('email')}</span></h4>
                        </div>
                        <div>
                            <button className="p-5 bg-green-600" onClick = {()=>{localStorage.clear(); 
                            Navigate('/')}}>Sign out</button>
                        </div>
                    </div>
                    <hr className="horizontal" />
                    <div className="details">
                        {returnComponents}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;
