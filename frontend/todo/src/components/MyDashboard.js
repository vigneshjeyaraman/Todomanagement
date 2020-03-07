import React, { useEffect } from 'react'
import Navbar2 from './Navbar2'
import Todo from './Todo'
function MyDashboard(){
    let username = localStorage.getItem('username')
    useEffect(() => {
        if(!username){
            alert('Please login to continue')
            window.location.href = 'http://localhost:3000/login'
        }
    })
    function addTodo(){
        alert("hello")
    }
    
    return(
    <div>
        <Navbar2 />
        <Todo />
    </div>
    )
}

export default MyDashboard