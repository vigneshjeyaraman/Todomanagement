import React, { Component } from 'react'
import { USERTODOURL } from '../Constants'
import history from '../history'
import commonApiCall from '../service'
class AddTodo extends Component{
    handleSubmit(){
        let url = `${USERTODOURL}`
        let body = {
            title : document.getElementById('title').value,
            description: document.getElementById('description').value,
            deadline: document.getElementById('deadline').value,
            finished: document.getElementById('finished').value
        }
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
        alert("Updated")
        history.push('/mydashboard')
    }
    render(){
        return(
            <div>
            <div className="row container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="title" type="text" required />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="description" type="text" required />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="deadline" type="date" required />
                            <label htmlFor="deadline">Deadline</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select id="finished" defaultValue="Finished">
                                <optgroup label="Finished">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
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