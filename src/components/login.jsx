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

    const setNumber = (event) =>{
        setPhoneNumber(event.target.value);
    }

    const setlastName = (event) =>{
        setLastName(event.target.value);
    }
    const setfirstName = (event) =>{
        setFirstName(event.target.value)
    }
    const setMail = (event) =>{
        setEmail(event.target.value);
        console.log(Email);
    }

    const setpassWord = (event)=>{
        setPassword(event.target.value);
        console.log(Password);
    }


    return(
        <div>
            <h4>Sing in</h4>
            <div>
                <input type="text" name="" id="" onChange={setMail} />
                <input type="text" name="" id="" onChange={setpassWord}/>
            </div>
            <input type="button" name="" id="" onChange={userActions.SingIn} value ="Sign in"/>
        </div>
    )
}

export default SignUp;