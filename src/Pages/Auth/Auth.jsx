import React from "react";
import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";


function Auth(){
    const [toggle, setToggle] = useState(0);

return(
    <div>
        {toggle ? <Signin/> : <Signup/>}
        <p onClick= {()=>setToggle(toggle ? 0: 1)}>{toggle? "Already registered? Login" : "New to TMES? Signup"}</p>
    </div>
)
}

export default Auth;