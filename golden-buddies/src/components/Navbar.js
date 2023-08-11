import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import React, { useState } from 'react';
import "../styles/Navbar.css";
import LoginForm from './LoginForm';
import GoldenBuddies from '../images/Golden.jpg';

const Navbar = () => {
    const { logout } = useLogout();
    const [loginFormVisible, setLoginFormVisible] = useState(false);

    const handleClick = () => {
        logout();
    };

    const handleLoginClick = () => {
        setLoginFormVisible(!loginFormVisible);
    };

    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <div className="logo">
                        <img src={GoldenBuddies} alt="Golden Buddies" className="logo-picture"/>
                    </div>
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
            {loginFormVisible && <LoginForm />}
        </header>
    );
};

export default Navbar;
