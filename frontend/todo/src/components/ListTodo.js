import React, { Component } from 'react'
import axios from 'axios'
import GETHEADERS, { USERTODOURL } from './Constants'
import history from './history'
class       ListTodo extends Component{
    state = {
        "todos":null
    }
    handleEdit(id){
        history.push('/edittodo/' + id)
    }
    handleDelete(index, id){
        let token = localStorage.getItem('token')
        let headers = GETHEADERS(token)
        let url = `${USERTODOURL}${id}`
        let confirmation = window.confirm("Are you sure. You want to delete this TODO!!")
        if(confirmation){
            axios.delete(
                url,
                {
                    headers:headers
                }
            ).then(response =>{
                console.log(response)
                let todos = this.state.todos
                todos.splice(index, 1)
                this.setState({
                    todos
                })
                alert("TODO deleted successfully!!")
            }).catch(err =>{
                console.log(err)
                alert("Try Again later!!")
            })
        }
    }
    componentDidMount(){
        let token = localStorage.getItem('token')
        let headers = GETHEADERS(token)
        let url = `${USERTODOURL}`
        axios.get(
            url,
            {
                headers:headers
            }
        ).then(response =>{
            this.setState({
                todos: response.data
            })
    }).catch(err=>{
        console.log(err)
    })
}
    render(){
        let todos=null
        if(this.state.todos){
             todos = this.state.todos.length ?(
                this.state.todos.map((items, index) => (
                            <tr key={items.id}>
                                <td align="right">{items.title}</td>
                                <td align="right">{items.description}</td>
                                <td align="right">{items.deadline}</td>
                                <td align="right">{items.is_finished ? "Yes" : "No "}</td>
                                <td><button className="btn waves-effect waves-light btn-small red" onClick = { () => {this.handleDelete(index,items.id)}}>Delete</button></td>
                                <td><button className="btn waves-effect waves-light btn-small green" onClick = { () => {this.handleEdit(items.id)}}>Edit</button></td>
                            </tr>
                ))
            ) : (
                <tr>
                    <td className="center">You have no todo's left</td>
                </tr>
            )
    }
        return(
            <div className="center container">
                <table>
                    <thead>
                        <tr>
                            <td><strong>Title</strong></td>
                            <td><strong>Description</strong></td>
                            <td><strong>Deadline</strong></td>
                            <td><strong>Finished</strong></td>
                            <td><strong>Delete</strong></td>
                            <td><strong>Edit</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodo