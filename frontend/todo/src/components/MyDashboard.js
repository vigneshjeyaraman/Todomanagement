import React, { useEffect } from 'react'
import Navbar2 from './Navbar2'
function MyDashboard(){
    let username = localStorage.getItem('username')
    useEffect(() => {
        if(!username){
            alert('Please login to continue')
            window.location.href = 'http://localhost:3000/login'
        }
    })
    
    return(
    <Navbar2 username = { username }/>
    )
}

export default MyDashboard