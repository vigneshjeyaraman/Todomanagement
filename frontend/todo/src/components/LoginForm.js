import React, { useEffect } from 'react'
import axios from 'axios'
import GETHEADERS, { USERBASEURL } from './Constants'
import Navbar from './Navbar'
function LoginForm(){
    useEffect(() =>{
        if(localStorage.getItem('username')){
            window.location.href = 'http://localhost:3000/mydashboard'
        }
    })
    function handleSubmit(e){
        e.preventDefault()
        let body ={
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        let headers = GETHEADERS()
        let url= `${USERBASEURL}login/`
        console.log(url)
        axios.post(url,
            body,
            {
                headers:headers
            }).then(response =>{
                console.log(response)
                alert('Welcome, '+response.data['data']['username'])
                localStorage.setItem('email',response.data['data']['email'])
                localStorage.setItem('username',response.data['data']['username'])
                localStorage.setItem('token',response.data['data']['token'])
                window.location.href = 'http://localhost:3000/mydashboard'
            }).catch(err =>{
                console.log("sssssssss",err.response)
                alert(err.response.data['error']['message'])
            })
    }
    return (
        <div>
            <Navbar />
            <div className="row container">
                <form className="col s12" onSubmit = {handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="password" type="password" required />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s0">
                            <button type="submit" className="waves-effect waves-light btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm