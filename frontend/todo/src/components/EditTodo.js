import React, { Component } from 'react'
import { USERTODOURL } from '../Constants'
import history from '../history'
import commonCallApi from '../service'
class EditTodo extends Component{
    state = {
        "title":null,
        "description":null,
        "deadline":null,
        "is_finished":null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        let url = `${USERTODOURL}${this.props.match.params.id}/`
        
        let body = this.state
        console.log(body)
        let editResponse = commonCallApi('put', url, body)
        editResponse.then(response =>{
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
    componentDidMount(){
        let url = `${USERTODOURL}${this.props.match.params.id}`
        let todogetResponse = commonCallApi('get', url)
        todogetResponse.then(response =>{
            // console.log(response.data)
            this.setState({
                title : response.data['title'],
                description : response.data['description'],
                deadline : response.data['deadline'],
                is_finished: response.data['is_finished']
            })
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
                            <input id="title" type="text" onChange = { this.handleChange } value = { this.state['title'] } required />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="description" type="text" onChange = { this.handleChange } value = { this.state['description'] }required />
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="deadline" type="date" onChange = { this.handleChange } value = { this.state['deadline'] } required />
                            <label htmlFor="deadline">Deadline</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select id="is_finished" onChange = { this.handleChange } value = { this.state['is_finished'] }defaultValue="Finished">
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
export default EditTodo