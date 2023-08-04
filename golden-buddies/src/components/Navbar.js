import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const { logout } = useLogout

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
                    <div>
                        <button onClick={handleClick}>log out</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/profile">Profile</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar