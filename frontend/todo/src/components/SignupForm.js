import React from 'react'
import axios from 'axios'
import GETHEADERS, { USERBASEURL } from './Constants'
import Navbar from './Navbar'
function SignupForm(){
    function handleSubmit(e){
        e.preventDefault()
        let body ={
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            username: document.getElementById('username').value,
            phone_number: document.getElementById('phone_number').value
        }
        let headers = GETHEADERS()
        let url= `${USERBASEURL}signup/`
        console.log(url)
        axios.post(url,
            body,
            {
                headers:headers
            }).then(response =>{
                console.log(response)
                alert("Signup Successfull. Please login and manage your todo!!")
                window.location.href = 'http://localhost:3000/login'
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
                        <div className="input-field col s6">
                            <input id="username" type="text" required />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone_number" type="number" required />
                            <label htmlFor="phone_number">Phone Number</label>
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
export default SignupForm