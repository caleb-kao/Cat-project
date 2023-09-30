import React, { useState, useEffect } from 'react';
import './login.scss';
import Signup from './signup';
import fatcat from '../assets/fatcat.gif'
// import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        // console.log()
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    function sign() {
        // return <Signup setToken={setToken} />
        return window.location.href = "signup.html"
    }

    return (
        <div className="login-wrapper">
            <h1>Log In</h1>
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
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <button className="btn" onClick={sign}>Sign Up</button>
                </div>
                {/* <div style="width: 100%;">
                    <div style={"width: 50%; height: 100px; float: left; background: green;"}>
                        <button type="submit">Submit</button>
                    </div>
                    <div style={"margin-left: 50%; height: 100px; background: blue;"}>
                        <button className="btn" onClick={sign} />
                    </div>
                </div> */}
            </form>

            <div className='cat'>
                <img src={fatcat} alt="test cat" />
            </div>
        </div>
    )
}