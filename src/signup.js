import React, { useState, useEffect } from 'react';
import './signup.scss';
import App from './App';
import fatcat from '../assets/redcat.gif'

export default function signup() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        // console.log()
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
    }

    function login() {
        return window.location.href = "index.html"
    }

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button className="btn" onClick={login}>Sign Up</button>
                </div>
            </form>

            <div className='cat'>
                <img src={fatcat} alt="test cat" />
            </div>
        </div>
    )
}