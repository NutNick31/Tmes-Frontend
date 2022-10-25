import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Auth.scss"

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        axios.post('/auth/login', user)
            .then(res => { console.log(res); })
            .catch(er => console.log(er));
    }

    return (
        <div>
            <div className="form-group">
                <input className="form-field" name="email" placeholder="email" value={email} onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input className="form-field" name="password" placeholder="password" value={password} onChange={handleInputChange}></input>
            </div>
            <button onClick={handleSubmit}>Sign in</button>
        </div>
    )
}

export default Signin;