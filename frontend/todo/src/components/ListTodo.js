import React, { Component } from 'react'
import { USERTODOURL } from '../Constants'
import history from '../history'
import commonApiCall from '../service'
class ListTodo extends Component{
    state = {
        "todos":null
    }
    handleEdit(id){
        history.push('/edittodo/' + id)
    }
    handleDelete(index, id){
        let url = `${USERTODOURL}${id}`
        let confirmation = window.confirm("Are you sure. You want to delete this TODO!!")
        if(confirmation){
            const deletedTodo = commonApiCall('delete',url)
            deletedTodo.then(response =>{
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
    addTodo(){
        history.push("/addtodo")
    }
    componentDidMount(){
        let url = `${USERTODOURL}`
        const todos = commonApiCall('get',url)
        todos.then(response =>{
            console.log(response.data)
            this.setState({
                todos:response.data
            })
        }).catch(err =>{
            console.log(err)
        })
}
    render_template(){
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
    return todos
    }
    render(){
        let todos = this.render_template()
        return(
            <div className="center container">
                
                <button className="btn-floating btn-medium green right" onClick = {this.addTodo}><i className="material-icons"><img src="plus.png" alt="add" width="40px" align="center"/></i></button>
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