import React from 'react'
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom'
import '../style.css'

const Navbar = () => {
    const { user, loggedIn, login, logout } = useAuth();
    const navigate = useNavigate()
    const callLogOut = () => {
        logout()
        navigate('/')
    }
    return (
        <nav>
            <div className="navLogo">
                <Link to='/'><img src="/img/jeep.png" alt="" /></Link>
            </div>
            <div className="navProfile">
                {loggedIn ? (
                    <div className='showOne'>
                        <Link to='/profile'>Profile</Link>
                        <div className='logoutBtn' onClick={callLogOut}>Logout</div>
                    </div>
                ) : (
                    <div className='showOne'>
                        <Link to='/auth'>Login</Link>
                        <Link to='/auth'>Register</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar