import React from 'react';
import './App.css';
import history from './history'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import Welcome from './ui_components/Welcome'
import Login from './ui_components/Login'
import MyDashboad from './components/MyDashboard'
import Logout from './ui_components/Logout';
import Signup from './ui_components/Signup'
import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
            <Router history={history}>
              <Route exact path='/' component ={Welcome} /> 
              <Route path ='/login' component ={Login} />
              <Route path ='/signup' component ={Signup} />
              <Route path ='/mydashboard' component ={MyDashboad} />
              <Route path ='/addtodo' component ={AddTodo} />
              <Route path ='/edittodo/:id' component ={EditTodo} />
              <Route path ='/logout' component ={Logout} />
              {/* <Route path ='/Signup' component={} />
              <Route path ='/Home' component={} /> */}
            </Router>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
