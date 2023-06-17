import React from "react";
import { useState } from "react";
import * as userActions from '../actions/useractions'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SingIn } from "../actions/useractions";

const SignUp = (props) =>{

    const [Email, setEmail ] = useState('');
    const [Password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setMail = (event) =>{
        setEmail(event.target.value);
    }
 
    const setpassWord = (event)=>{
        setPassword(event.target.value);
    }

    const dispatchLogin = SingIn({Email, Password});


    return(
        <div>
            <h4>Sing in</h4>
            <div>
                <input type="text" name="" id="" onChange={setMail} />
                <input type="text" name="" id="" onChange={setpassWord}/>
            </div>
            <input type="button" name="" id="" onClick={()=>{dispatchLogin(dispatch, navigate)}} value ="Sign in"/>
        </div>
    )
}

export default SignUp;