import React from 'react'
import history from '../history'
function Logout(){
        localStorage.clear()
        alert("Adios Amigo!!")
        history.pushState('/login')
    return(
        <h1>See you!!!</h1>
    )
}

export default Logout