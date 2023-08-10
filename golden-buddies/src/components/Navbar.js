import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import React, { useState } from 'react'; // Import useState
import "../styles/Navbar.css";
import LoginForm from './LoginForm'; // Import the LoginForm component

const Navbar = () => {
    const { logout } = useLogout();
    const [loginFormVisible, setLoginFormVisible] = useState(false); // State for login form visibility

    const handleClick = () => {
        logout();
    };

    const handleLoginClick = () => {
        setLoginFormVisible(!loginFormVisible); // Toggle login form visibility
    };

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
                        <Link to="#" onClick={handleLoginClick}>Login</Link>
                        <Link to="/signup">Signup</Link>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                </nav>
            </div>
            {/* Render the LoginForm component conditionally */}
            {loginFormVisible && <LoginForm />}
        </header>
    );
};

export default Navbar;
