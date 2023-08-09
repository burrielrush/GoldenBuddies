import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';


const Navbar = () => {
    const { logout } = useLogout
    const { user } = useAuthContext

    const handleClick = () => {
    logout()
    }

    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>Golden Buddies</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className="navbar">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div> 
                    )}
                    <div className='navbar'>
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar