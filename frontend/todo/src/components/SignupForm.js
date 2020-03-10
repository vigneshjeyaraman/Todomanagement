import React, { Component } from 'react'
import { USERBASEURL } from '../Constants'
import Navbar from '../ui_components/Navbar'
import commonApiCall from '../service'
import history from '../history'
class SignupForm extends Component{
    state = {
        email : null,
        password: null,
        username: null,
        phone_number: null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        let body =this.state
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
    render(){
    return (
        <div>
            <Navbar />
            <div className="row container">
                <form className="col s12" onSubmit = {this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" onChange = { this.handleChange } required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="password" type="password" onChange = { this.handleChange } required />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="username" type="text" onChange = { this.handleChange } required />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone_number" type="number" onChange = { this.handleChange } required />
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
}}
export default SignupForm