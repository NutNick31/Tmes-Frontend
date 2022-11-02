import axios from "axios";
import React from "react";
import isEmail from "validator/lib/isEmail";
import { useState } from "react";
import "./Auth.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [colorEmail, setColorEmail] = useState(false);
    const [colorPassword, setColorPassword] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
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
        <div className="auth-div">
            <div class="header">
                <LockIcon color="primary" sx={{ fontSize: 50 }} />
                <p className="header-para">Sign in</p>
            </div>
            <div className="form">
                <div className="form-group">
                    <TextField
                        fullWidth
                        id="standard-basic"
                        autoComplete="off"
                        name="email"
                        value={email}
                        onInput={handleInputChange}
                        label="Email"
                        variant="outlined"
                        required
                    />
                </div>
                <div className="form-group">
                    <TextField
                        fullWidth
                        id="standard-basic"
                        type="password"
                        autoComplete="off"
                        className={colorPassword}
                        name="password"
                        value={password}
                        onInput={handleInputChange}
                        label="Password"
                        variant="outlined"
                        required
                    />
                </div>
                <Button variant="contained" onClick={handleSubmit}>
                    Sign in
                </Button>
                <p className="lower-para" onClick={()=>{navigate('/signup')}}>New to TMES? Create an account</p>
            </div>
        </div>
)}

export default Signin;