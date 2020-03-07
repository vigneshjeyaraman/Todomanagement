import React from 'react'
import { USERBASEURL } from '../Constants'
import Navbar from '../ui_components/Navbar'
import commonApiCall from '../service'
import history from '../history'
function SignupForm(){
    function handleSubmit(e){
        e.preventDefault()
        let body ={
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            username: document.getElementById('username').value,
            phone_number: document.getElementById('phone_number').value
        }
        let url= `${USERBASEURL}signup/`
        let signupResponse = commonApiCall('post',url,body)
        console.log(url)
        signupResponse.then(response =>{
                console.log(response)
                alert("Signup Successfull. Please login and manage your todo!!")
                history.push('/login')
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