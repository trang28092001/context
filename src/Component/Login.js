import React, { useContext, useState } from "react"
import { LoginContext } from "../Context/LoginContext";


function Login() {
    const {setUseName,setShowProfile} = useContext(LoginContext)

    return(
        <>
            <input
                type= "text"
                placeholder="UserName"
                onChange={(event) =>{
                    setUseName(event.target.value);
                }}
            />
            <input type="text" placeholder="Password" />
            <button onClick={() => {setShowProfile(true)}}>LOGIN</button>
        </>
    );
}
 export default Login