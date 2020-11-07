import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    console.log(`THIS IS CURRENT USER FROM NAV: `, currentUser)
    return (
        <nav>
            <div className="nav-links">
                {currentUser && (
                    <React.Fragment>
                        <NavLink onClick={logout} className='nav-link' exact to='/'>Logout</NavLink>
                    </React.Fragment>
                )}
                {!currentUser && (
                    <React.Fragment>
                        <NavLink className='nav-link' exact to='/signup'>Sign Up</NavLink>
                        <NavLink className='nav-link' exact to='/login'>Login</NavLink>
                    </React.Fragment>
                )}
            </div>
        </nav>
    )
}
export default NavBar;