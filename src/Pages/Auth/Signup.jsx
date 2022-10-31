import axios from "axios";
import React from "react";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import "./Auth.scss";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [altEmail, setAltEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [altMobile, setAltMobile] = useState("");
    const [password, setPassword] = useState("");
    const [colorEmail, setColorEmail] = useState("form-field");
    const [colorAltEmail, setColorAltEmail] = useState("form-field")
    const [colorPassword, setColorPassword] = useState("form-field")

    const emailValidator = ()=>{
        console.log(isEmail(email));
        if(!isEmail(email)){
            setColorEmail("form-field red");
            console.log("hjhkj");
        }
        else setColorEmail("form-field green");
    }

    const altEmailValidator = () => {
        if(!isEmail(altEmail)){
            setColorAltEmail("form-field red");
        }
        else setColorAltEmail("form-field green");
    }

    const passwordValidator = () => {
        let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!regx.test(password)){
            setColorPassword("form-field red");
        }
        else setColorPassword("form-field green");
    }

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value);
                break;
            case "userName":
                setUserName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                emailValidator();
                break;
            case "altEmail":
                setAltEmail(e.target.value);
                altEmailValidator();
                break;
            case "mobile":
                setMobile(e.target.value);
                break;
            case "altMobile":
                setAltMobile(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                passwordValidator();
                break;
            default:

        }
    }

    const handleSubmit = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            altEmail: altEmail,
            mobile: mobile,
            altMobile: altMobile,
            password: password
        }
        console.log(user);
        axios.post('/auth/register', user)
            .then(res => { console.log(res); })
            .catch(er => console.log(er));
    }

    return (
        <div>
            <div className="form-group">
                <input className="form-field" name="firstName" placeholder="first name" value={firstName} onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input className="form-field" name="lastName" placeholder="last name" value={lastName} onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input className="form-field" name="userName" placeholder="user name" value={userName} onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input className={colorEmail} name="email" placeholder="email" value={email} onChange={handleInputChange}></input>
                {colorEmail === "form-field red" ? <div><br></br><p className="red-para">Enter a valid email</p></div>: null}
            </div>
            <div className="form-group">
                <input className={colorPassword} name="password" placeholder="password" value={password} onChange={handleInputChange}></input>
                {colorPassword === "form-field red" ? <div><br></br><p className="red-para">Invalid Password. Password must contain atleast 6 characters, one numeric, special and uppercase character </p></div>: null}
            </div>
            <div className="form-group">
                <input className={colorAltEmail} name="altEmail" placeholder="alt email" value={altEmail} onChange={handleInputChange}></input>
                {colorAltEmail === "form-field red" ? <div><br></br><p className="red-para">Enter a valid email</p></div>: null}
            </div>
            <div className="form-group">
                <input className="form-field" name="mobile" placeholder="mobile" value={mobile} onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input className="form-field" name="altMobile" placeholder="alt mobile" value={altMobile} onChange={handleInputChange}></input>
            </div>
            <button onClick={handleSubmit}>Sign up</button>
        </div>
    )
}

export default Signup;