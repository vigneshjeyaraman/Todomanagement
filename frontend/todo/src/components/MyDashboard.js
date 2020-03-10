import React, { useEffect } from 'react'
import Navbar2 from '../ui_components/Navbar2'
import Todo from '../ui_components/Todo'
const MyDashboard = () =>{
    let username = localStorage.getItem('username')
    useEffect(() => {
        if(!username){
            alert('Please login to continue')
            window.location.href = 'http://localhost:3000/login'
        }
    })
    return(
    <div>
        <Navbar2 />
        <Todo />
    </div>
    )
}

export default MyDashboard