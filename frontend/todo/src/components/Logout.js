import React from 'react'

function Logout(){
        localStorage.clear()
        alert("Adios Amigo!!")
        window.location.href = "http://localhost:3000/login"
    return(
        <h1>See you!!!</h1>
    )
}

export default Logout