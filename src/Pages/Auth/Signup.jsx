import axios from "axios";
import React from "react";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import "./Auth.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [altEmail, setAltEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [altMobile, setAltMobile] = useState("");
    const [password, setPassword] = useState("");
    const [colorEmail, setColorEmail] = useState(false);
    const [colorAltEmail, setColorAltEmail] = useState(false)
    const [colorPassword, setColorPassword] = useState(false)

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
        <div className="form">
            <div className="form-group">
                <TextField className="form-field" name="firstName" id="filled-basic" label="First Name" value={firstName} onChange={handleInputChange} variant="standard" />
                {/* <input className="form-field" name="firstName" placeholder="first name" value={firstName} onChange={handleInputChange}></input> */}
            </div>
            <div className="form-group">
                <TextField className="form-field" name="lastName" id="filled-basic" label="Last Name" value={lastName} onChange={handleInputChange} variant="standard" />
                {/* <input className="form-field" name="lastName" placeholder="last name" value={lastName} onChange={handleInputChange}></input> */}
            </div>
            <div className="form-group">
                <TextField className="form-field" name="userName" id="filled-basic" label="Username" value={userName} onChange={handleInputChange} variant="standard" />
                {/* <input className="form-field" name="userName" placeholder="user name" value={userName} onChange={handleInputChange}></input> */}
            </div>
            <div className="form-group">
                {/* <input className={colorEmail} name="email" placeholder="email" value={email} onInput={handleInputChange}></input> */}
                <TextField id="standard-basic" autoComplete="off" className={colorEmail} name="email" value={email} onInput={handleInputChange} label="Email" variant="standard" />
                {colorEmail ? <div><br></br><p className="red-para">Enter a valid email</p></div>: null}
            </div>
            <div className="form-group">
                {/* <input className={colorPassword} name="password" placeholder="password" value={password} onInput={handleInputChange}></input> */}
                <TextField id="standard-basic" autoComplete="off" className={colorPassword} name="password" value={password} onInput={handleInputChange} label="Password" variant="standard" />
                {colorPassword ? <div><br></br><p className="red-para">Invalid Password. Password must contain atleast 6 characters, one numeric, special and uppercase character </p></div>: null}
            </div>
            <div className="form-group">
               <TextField autoComplete="off"  name="altEmail" id="filled-basic" label="Alternate-Email" value={altEmail} onChange={handleInputChange} variant="standard" />
                {/* <input className={colorAltEmail} name="altEmail" placeholder="alt email" value={altEmail} onChange={handleInputChange}></input> */}
                {colorAltEmail === "form-field red" ? <div><br></br><p className="red-para">Enter a valid email</p></div>: null}
            </div>
            <div className="form-group">
                <TextField className="form-field" name="mobile" id="filled-basic" label="Mobile No." value={mobile} onChange={handleInputChange} variant="standard" />
                {/* <input className="form-field" name="mobile" placeholder="mobile" value={mobile} onChange={handleInputChange}></input> */}
            </div>
            <div className="form-group">
                <TextField className="form-field" name="altMobile" id="filled-basic" label="Alternate Mobile" value={altMobile} onChange={handleInputChange} variant="standard" />
                {/* <input className="form-field" name="altMobile" placeholder="alt mobile" value={altMobile} onChange={handleInputChange}></input> */}
            </div>
            <Button variant="contained" onClick={handleSubmit}>Sign up</Button>
            {/* <button onClick={handleSubmit}>Sign up</button> */}
        </div>
    )
}

export default Signup;