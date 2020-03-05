import React from 'react';
import './App.css';
import history from './components/history'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import MyDashboad from './components/MyDashboard'
import Logout from './components/Logout';
import Signup from './components/Signup'
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
