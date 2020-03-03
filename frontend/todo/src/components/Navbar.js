import React from 'react'
import { NavLink } from 'react-router-dom'
/*
Navbar is the important component. It will link all the other component like home, about, login and
signup.
*/
function Navbar() {
    return (
        <nav>
                <div className="navbar-material">
                    <div className="nav-wrapper">
                        <div className="left-align"><a href="/" className="brand-logo App-logo" id='App-logo'><img className="circle responsive-img middle" src={'favicon.ico'} alt="LOGO"/></a></div>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                                <li><NavLink to="/signup">Signup</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar