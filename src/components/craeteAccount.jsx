import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createAccount } from "../actions/useractions";
import '../components/authentication/login.css'


const SingUp = (props) =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName ] = useState('');
    const [Email, setEmail ] = useState('');
    const [PhoneNumber, setPhoneNumber ] = useState();
    const [Password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(true);

    const toRender = ['Firstname', 'Lastname', 'Email', 'Phone Number', 'Password'];

    const Signup = createAccount(
        {
            firstName: firstName,
            lastName: lastName,
            Email: Email,
            phoneNumber: PhoneNumber,
            Password: Password,
        }
    )


    const namestoFunctions = {
        'Fistname': setFirstName,
        'Lastname' : setLastName,
        'Email' : setEmail,
        'Phone Number' : setPhoneNumber,
        'Password' : setPassword,
    }


    return(
        <div >
            <div className="inputs">
                {Object.keys(namestoFunctions).map(key =>{
            return <input type = {(key == 'Password' && !showPassword)? 'password' : 'text'} name = {key} id  = {key} placeholder = {key} onChange = {(event)=>{namestoFunctions[key](event.target.value)}}/>
        })}
        <input type="button"className="buttonSignup" name="" id="" value= 'Sign up' onClick = {()=>{
                Signup(dispatch, navigate);
            }}/>
            </div>
            
        </div>
    )
}

export default SingUp;