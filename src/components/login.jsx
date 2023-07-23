import React from "react";
import { useState } from "react";
import * as userActions from '../actions/useractions'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SignIn } from "../actions/useractions";
import './authentication/login.css'
import googleIcon from '../images/googleIcon.png'
import { Link } from "react-router-dom";
import SingUp from '../components/craeteAccount'
import { useEffect } from "react";
import '../components/authentication/login.css'

const SignUp = (props) =>{

    const [Email, setEmail ] = useState('');
    const [Password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);
    const[loginClass, setLoginClass] = useState('active')
    const[createaccountClass, setCreateAccountClass] = useState('unactive')

    const setMail = (event) =>{
        setEmail(event.target.value);
        console.log(Email);
    }
 
    const setpassWord = (event)=>{
        setPassword(event.target.value);
    }

    const dispatchLogin = SignIn(Email, Password);

    const loginRender = ()=>{
        return(
            <div>
                <div className="inputs">
                    <input type="text" name="" id="" onChange={setMail} placeholder = 'Email ' className="inputSpace"/>
                    <input type="password" name="password" id="password" onChange={setpassWord} placeholder = 'Password' className="inputSpace"/>
                    <div className="buttons">
                        <input type="button" className="buttonLogin" name="" id="" onClick={()=>{dispatchLogin(dispatch, navigate)}} value ="Sign in"/>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className="loginPage">
            <div className="loginCard">
                <h1 className="heading">The Dartmouth market</h1>
                <div className="lognavigator">
                    <Link className={loginClass} onClick={()=>{setLogin(true);
                    setLoginClass('active');
                    setCreateAccountClass('unactive')}}><h2>Login</h2></Link>
                    <Link className={createaccountClass} onClick={()=>{setLogin(false);
                    setLoginClass('unactive');
                    setCreateAccountClass('active')}}><h2>Create account</h2></Link>
                </div>
                {(login)? loginRender(): <SingUp />}
                <hr  className={(login)? 'loginLine' : 'accountLine' }/>
                <div className="bottoms">
                    <div className="third-party-login">
                        <img src={googleIcon} alt="" height='70rem' width='70rem'/>
                        <input type="button" name="" id=""  value = {`${(login)? 'Login ' : 'Sign up'} with Google`} className = {(login)? 'withGoogleLogin' : 'withGoogleAccount'}/>
                    </div>
                    <div className={(login)? 'loginLinks' : 'accountLinks'}>
                        <Link >Privacy</Link>
                        <Link>Legal</Link>
                        <Link>Need help?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;