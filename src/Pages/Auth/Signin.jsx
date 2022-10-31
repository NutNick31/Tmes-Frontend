import axios from "axios";
import React from "react";
import isEmail from "validator/lib/isEmail";
import { useState } from "react";
import "./Auth.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { red } from "@mui/material/colors";

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [colorEmail, setColorEmail] = useState(false);
    const [colorPassword, setColorPassword] = useState(false);

    const emailValidator = ()=>{
        console.log(isEmail(email));
        if(!isEmail(email)){
            setColorEmail(true);
            console.log("hjhkj", email);
        }
        else setColorEmail(false);
    }

    const passwordValidator = () => {
        let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!regx.test(password)){
            setColorPassword(true);
        }
        else setColorPassword(false);
    }

    const redStyle = {
        color: "primary.dark",
    }

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                emailValidator();
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
            email: email,
            password: password
        }
        console.log(user)
        axios.post('/auth/login', user)
            .then(res => { console.log(res); })
            .catch(er => console.log(er));
    }

    return (
        <Box>
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
            {/* <button onClick={handleSubmit}>Sign in</button> */}
            <Button variant="contained" onClick={handleSubmit}>Sign in</Button>
        </Box>
    )
}

export default Signin;