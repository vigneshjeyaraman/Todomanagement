import React from 'react'
import history from '../history'
const Logout = () => {
        localStorage.clear()
        alert("Adios Amigo!!")
        history.push('/login')
    return(
        <h1>See you!!!</h1>
    )
}

export default Logout