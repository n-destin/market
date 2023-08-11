import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SignIn } from "../actions/useractions";
import './authentication/login.css'
import googleIcon from '../images/googleIcon.png'
import { Link } from "react-router-dom";
import SingUp from '../components/craeteAccount'


const SignUp = (props) =>{

    const [Email, setEmail ] = useState('');
    const [Password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);

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
                    <h2>Log In</h2>
                    <input type="text" name="" id="" onChange={setMail} placeholder = 'Login with your email'/>
                    <input type="text" name="" id="" onChange={setpassWord} placeholder = 'Your password'/>
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
                    <p className="centerLink">Don't have an account? <Link className="loginLink" onClick={()=>{setLogin(false)}}>Create account</Link></p>
                    <hr />
                    <div className="bottoms">
                        <div className="third-party-login">
                            <img src={googleIcon} alt="" height='50rem' width='50rem'/>
                            <input type="button" className="third-party-button" name="" id="" value={`${(login)? 'Login ' : 'Sign up'} with Google`} />
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