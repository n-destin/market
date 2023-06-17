import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createAccount } from "../actions/useractions";


const SingUp = (props) =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();


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
    }

    const setschoolYear = (event) =>{
        setYear(event.target.value)
    }

    const setpassWord = (event)=>{
        setPassword(event.target.value);
    }

    const Signup = createAccount(
        {
            firstName: firstName,
            lastName: lastName,
            Password: Password,
            Email: Email,
            phoneNumber: PhoneNumber,
            Class: schoolYear,
        }
    )

    return(
        <div>
            <h3>Create account</h3>
            <div className="labels">
                <label htmlFor="">
                    Firstname:
                    <input type="text" name="Firstname" id="" onChange={setfirstName}/>
                </label>
                <label htmlFor="">
                    Lastname:
                    <input type="text" name="" id="" onChange={setlastName}/>
                </label>
                <label htmlFor="">
                    Email:
                    <input type="text" name="" id="" onChange={setMail}/>
                </label>
                <label htmlFor="">
                    Password:
                    <input type="text" name="" id="" onChange={setpassWord}/>
                </label>
                <label htmlFor="">
                    Class:
                    <input type="text" name="" id="" onChange={setschoolYear}/>
                </label>
                <label htmlFor="">
                    Phone number:
                    <input type="text" name="" id="" onChange={setNumber}/>
                </label>
            </div>
            <input type="button" name="" id="" value= 'Sign up' onClick = {()=>{
                Signup(dispatch, navigate);
            }}/>
        </div>
    )
}

export default SingUp;