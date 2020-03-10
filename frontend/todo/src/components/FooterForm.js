import React, { Component } from 'react'
import { USERBASEURL } from '../Constants'
import commonCallApi from '../service'

 class FooterForm extends Component {
    state = {
        first_name: null,
        last_name: null,
        email: null,
        query: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        // e.preventDefault()
        let url=`${USERBASEURL}feedback`
        let body = this.state
        let contactResponse = commonCallApi('post', url, body)
        contactResponse.then(
            response =>{
                console.log(response)
                // alert(response.data['data']['message'])
                document.getElementById('form').reset()
            }
        ).catch(
            err =>{
                console.log(err)
            }
        )
    }
    async callSubmit(){
        await this.handleSubmit()
        alert("We will reach out to you soon.")
    }
    render(){
        return(
                <div className="row">
                    <form className="col s12" id="form">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" onChange = { this.handleChange } className="validate" required/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" onChange = { this.handleChange }className="validate" required/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" onChange = { this.handleChange } className="validate" required/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea placeholder="Write your query" onChange = { this.handleChange } id='query' cols="20" rows="10" required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn" type="submit" onClick = { () => {this.callSubmit()}}>Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
        )
    }}
export default FooterForm