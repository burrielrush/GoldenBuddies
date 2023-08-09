import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import React from 'react';


const Navbar = () => {
    const { logout } = useLogout();

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
                    <div className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <button onClick={handleClick}>log out</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar