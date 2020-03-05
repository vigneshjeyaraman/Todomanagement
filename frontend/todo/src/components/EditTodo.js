import React, { Component } from 'react'
import axios from 'axios'
import GETHEADERS, { USERTODOURL } from './Constants'
import history from './history'
class EditTodo extends Component{
    handleSubmit(){
        let headers = GETHEADERS(localStorage.getItem('token'))
        let url = `${USERTODOURL}${this.props.match.params.id}/`
        let finished = document.getElementById('finished').value
        if(finished === 'yes'){
            finished = true
        }else{
            finished = false
        }
        let body = {
            title : document.getElementById('title').value,
            description: document.getElementById('description').value,
            deadline: document.getElementById('deadline').value,
            finished: finished
        }
        console.log(body)
        axios.put(
            url,
            body,
            {
                headers:headers
            }
        ).then(response =>{
            console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
        alert("Updated")
        history.push('/mydashboard')
    }
    componentDidMount(){
        let headers = GETHEADERS(localStorage.getItem('token'))
        let url = `${USERTODOURL}${this.props.match.params.id}`
        axios.get(
            url,
            {
                headers:headers
            }
        ).then(response =>{
            // console.log(response.data)
            document.getElementById('title').value = response.data['title']
            document.getElementById('description').value = response.data['description']
            document.getElementById('deadline').value = response.data['deadline']
            if(response.data['finished']){
                document.getElementById('finished').value = "yes"
            }else{
                document.getElementById('finished').value = "no"
            }
        }).catch(err =>{
            console.log(err)
        })
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
                            <button type="submit" className="waves-effect waves-light btn" onClick = { () => {this.handleSubmit()}}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
}
export default EditTodo