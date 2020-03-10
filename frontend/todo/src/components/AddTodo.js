import React, { Component } from 'react'
import { USERTODOURL } from '../Constants'
import history from '../history'
import commonApiCall from '../service'
class AddTodo extends Component{
        state = {
            "title":null,
            "description":null,
            "deadline":null,
            "is_finished":null
        }
    
    handleSubmit(){
        let url = `${USERTODOURL}`
        let body = this.state
        console.log(body)
        let todoResponse = commonApiCall('post', url, body)
        todoResponse.then(response =>{
            console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
    }

    async callSubmit(){
        await this.handleSubmit()
        alert("Todo Added")
        history.push('/mydashboard')
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <div>
            <div className="row container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="title" type="text" onChange = { this.handleChange } required />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="description" type="text" onChange = { this.handleChange } required />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="deadline" type="date" onChange = { this.handleChange } required />
                            <label htmlFor="deadline">Deadline</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select id="is_finished" onChange = { this.handleChange }  defaultValue="Finished">
                                <optgroup label="Finished">
                                    <option value="select">Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s0">
                            <button type="submit" className="waves-effect waves-light btn" onClick = { () => {this.callSubmit()}}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default AddTodo