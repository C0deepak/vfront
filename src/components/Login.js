import React, { useState } from 'react'
import '../pages/auth/auth.css';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { token, loggedIn, login, logout } = useAuth();
    const navigate = useNavigate()
    const [luser, setLuser] = useState({
        email: '', password: ''
    })

    let name, value;
    const handleInputsLogin = (e) => {
        name = e.target.name;
        value = e.target.value

        setLuser({ ...luser, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://vedantabackend.onrender.com/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(luser),
            });


            if (response.status === 200) {
                const data = await response.json();
                login(data.token, data.user)
                console.log(data);
                navigate('/')
            }

        } catch (error) {
            alert(error)
            console.error('Error submitting the form:', error);
        }
    }

    return (
        <div className='loginContainer'>
            <p>LOGIN</p>
            <form>
                <div className='formDiv'>
                    <label>Email address</label>
                    <input type="email" name='email' value={luser.email} onChange={handleInputsLogin} />
                </div>
                <div className='formDiv'>
                    <label>Password</label>
                    <input type="password" name='password' value={luser.password} onChange={handleInputsLogin} />
                </div>
                <button type="submit" className="loginButton" onClick={handleSubmit}>Log In</button>
            </form>

            <img src="/img/login.png" alt="" />
        </div>
    )
}

export default Login