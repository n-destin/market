import React, { useState } from "react";
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
                    <h3>Login</h3>
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
                <Link to={`/`} style={{color: "green"}} className = "accountLinks">The College Market</Link>
                    {(login)? loginRender(): <SingUp />}
                    <p className="centerLink">{(login) ? "Don't have an account yet?" : `Have an account Already'` } <Link className="loginLink" onClick={()=>{setLogin(!login)}}>{(login) ? 'Create account': 'Login'}</Link></p>
                    <hr />
                    <div className="bottoms">
                        <div className="third-party-login">
                            <img src={googleIcon} alt="" height='50rem' width='50rem'/>
                            <input type="button" className='w-10' name="" id="" value={`${(login)? 'Login ' : 'Sign up'} with Google`} />
                        </div>
                        <div className="links">
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