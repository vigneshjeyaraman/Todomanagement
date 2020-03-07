import React, { useEffect } from 'react'
import { USERBASEURL } from '../Constants'
import Navbar from '../ui_components/Navbar'
import history from '../history'
import commonApiCall from '../service'

function LoginForm(){
    useEffect(() =>{
        if(localStorage.getItem('username')){
            history.push('/mydashboard')
        }
    })
    function handleSubmit(e){
        e.preventDefault()
        let body ={
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        let url= `${USERBASEURL}login/`
        let loginResponse = commonApiCall('post',url,body)
        loginResponse.then(response =>{
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