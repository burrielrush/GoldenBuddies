import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>Golden Buddies</h1>
                </Link>
                <nav>
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