import React from "react";
import { useState } from "react";
import * as userActions from '../actions/useractions'
const SignUp = (props) =>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName ] = useState('');
    const [Email, setEmail ] = useState('');
    const [PhoneNumber, setPhoneNumber ] = useState('');
    const [schoolYear, setYear] = useState('');
    const [Password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(true);

    function setNumber(event){
        setPhoneNumber(event.target.value);
    }

    function setlastName(event){
        setLastName(event.target.value);
    }
    function setfirstNamea(event){
        setFirstName(event.target.value)
    }
    function setMail(event){
        setEmail(event.target.value);
    }

    function setschoolYear(event){
        setYear(event.target.value)
    }

    const SingupElelment = () =>{
            return (
                <div>
            <div className="">
                <label htmlFor="">
                    First Name:
                    <input type="text" name="firstname" id="name" onChange={setfirstNamea}/>
                </label>
                <label htmlFor="">
                    Last Name:
                    <input type="text" name="lastname" id="name" onChange={setlastName}/>
                </label>
                <label htmlFor="name">
                    School Email:
                    <input type="text" name="schoolEmail" id="email" onChange={setMail}/>
                </label>
                <label htmlFor="name">
                    Mobile Number:
                    <input type="text" name="schoolEmail" id="email" onChange={setNumber} />
                </label>
                <label htmlFor="name">
                    School Year:
                    <input type="text" name="schoolEmail" id="email" onChange={setschoolYear} />
                </label>
                <input type="button"  className="submit" value="Submit" onClick={()=>{userActions.createAccount({
                    firstName : firstName,
                    lastName: lastName,
                    phoneNumber : PhoneNumber,
                    Email: Email,
                    Password : Password,
                    Class :  schoolYear,
                })}}/>
            </div>
            </div>
            )
    }

    const SignInElemnent = (props)=>{
        return(
            <div>
                <h4>Sing in</h4>
                <div>
                    <label htmlFor="">
                        Email:
                        <input type="text" onChange={setEmail}/>
                    </label>
                    <label htmlFor="">
                        Password:
                        <input type="text" name="" id=""  onChange={setPassword}/>
                    </label>
                </div>
                <input type="button" name="" id="" onChange={userActions.SingIn} value ="Sign in"/>
            </div>
        )
    }


    return(
        <div>
            <h2>The Dartmouth Market</h2>
            {(isLogin)? <SignInElemnent/>: <SingupElelment/>}
        </div>
        
    )
}

export default SignUp;