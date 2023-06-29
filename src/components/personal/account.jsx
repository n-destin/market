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
            
        },
        "Security information ": {
            'Change email adress' : function(){console.log('something to be called');},
            'Change Password' : function(password){console.log(password)},
            'Set security Questions ' : function(){console.log('setting security questions');},
            'Manage verifications Phones'  :  function(){console.log('managing phones');},
            'Manage connected accounts' : function(){console.log('managing account');}
        },
        "Finance information" : {

        }
    }


    // console.log(personalLinksFunctions);

    function returningComponents(){
        Object.keys(personalLinksFunctions).map(key=>{
            console.log(key);
            return key;
        })
    }

    const returnComponents = returningComponents();
    // console.log();
    
    console.log(returnComponents);

    return(
        <div>
            <div className="loginPage">
                <div className="accountCard">
                    <div className="heading">
                        <div className="partOne">
                            <img src={(Profile)? Profile : profileHolder} alt="personalImage" height='90%' className="profileImage"/>
                        </div>
                        <div className="partTwo">
                            <h4>Your member id:  <span className="userId">{userId}</span></h4>
                            <h4>Email :  <span className="spanning_element_email">{Email}<Link className="changeButton">Change emial address</Link></span></h4>
                            <h4>Linked Mobile: <span className="spanning_element">{PhoneNumber}<Link className="changeButton">Change phone number</Link></span></h4>
                        </div>
                    </div>
                    <hr className="horizontal"/>
                    <div className="details">
                        {/* {returnComponents} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;