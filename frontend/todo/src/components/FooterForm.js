import React from 'react'
import { USERBASEURL } from '../Constants'
import commonCallApi from '../service'
function FooterForm() {
    function handleSubmit(e){
        e.preventDefault()
        let url=`${USERBASEURL}feedback`
        let body = {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            query: document.getElementById('query').value
        }
        let contactResponse = commonCallApi('post', url, body)
        contactResponse.then(
            response =>{
                console.log(response)
                alert(response.data['data']['message'])
                document.getElementById('form').reset()
            }
        ).catch(
            err =>{
                console.log(err)
            }
        )
    }
        return(
                <div className="row">
                    <form className="col s12" id="form" onSubmit = {handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" required/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" required/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" className="validate" required/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea placeholder="Write your query" id='query' cols="20" rows="10" required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
        )
    }
export default FooterForm