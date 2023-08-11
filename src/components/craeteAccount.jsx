import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createAccount } from "../actions/useractions";
import '../components/authentication/login.css'

const SingUp = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState();
    const [Password, setPassword] = useState('');
    const [University, setUniversity] = useState("");
    const [classYear, setclassYear] = useState("")
    const [isLogin, setLogin] = useState(true);

    const toRender = ['Firstname', 'Lastname', 'Email', 'Phone Number', 'Password', 'University', "classYear"];

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
            </div>
        </div>
    )
}

export default SingUp;
