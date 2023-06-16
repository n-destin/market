import React from "react";
import { useState } from "react";


const SingUp = (props) =>{


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

    const setschoolYear = (event) =>{
        setYear(event.target.value)
    }

    const setpassWord = (event)=>{
        setPassword(event.target.value);
        console.log(Password);
    }

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
            <input type="button" name="" id=""/>
        </div>
    )
}

export default SingUp;