import React, { useContext } from "react"
import { LoginContext } from "../Context/LoginContext"


function Profile() {
    const {userName} = useContext(LoginContext);

    return(
        <>
            <h1>Profile</h1>
            <h2>UserName:{userName} </h2>
        </>
    )
}

export default Profile