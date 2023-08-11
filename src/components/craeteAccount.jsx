import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createAccount } from "../actions/useractions";
import '../components/authentication/login.css'

const SingUp = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

<<<<<<< HEAD
=======
    const[showPassword, setShowPassword] = useState(false);
>>>>>>> safe
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState();
    const [Password, setPassword] = useState('');
    const [University, setUniversity] = useState("");
    const [classYear, setclassYear] = useState("")
    const [isLogin, setLogin] = useState(true);

<<<<<<< HEAD
    const toRender = ['Firstname', 'Lastname', 'Email', 'Phone Number', 'Password', 'University', "classYear"];
=======
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
>>>>>>> safe

    const Signup = createAccount({
        firstName: firstName,
        lastName: lastName,
        Password: Password,
        Email: Email,
        phoneNumber: PhoneNumber,
        University: University,
        classYear: classYear
    });

    const namestoFunctions = {
<<<<<<< HEAD
        'Firstname': setFirstName,
        'Lastname': setLastName,
        'Phone Number': setPhoneNumber,
        'Password': setPassword,
        'Email': setEmail,
        "University": setUniversity,
        "classYear": setclassYear
    }

    return (
        <div className="loginPage">
            <div className="loginCard">
                <div className="inputs">
                    <h2>Create account</h2>
                    {Object.keys(namestoFunctions).map(key => {
                        return <input type='text' name={key} id={key} placeholder={key} onChange={(event) => { namestoFunctions[key](event.target.value) }} />
                    })}
                    <input type="button" className="buttonLogin" name="" id="" value='Sign up' onClick={() => {
                        Signup(dispatch, navigate);
                    }} />
                </div>
=======
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
>>>>>>> safe
            </div>
        </div>
    )
}

export default SingUp;
