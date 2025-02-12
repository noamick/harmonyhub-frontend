import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Logged In:', { username, password });
    };

    return (
        <div className="login">
            <h2>Log in - HarmonyHub</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">submit</button>
            </form>
            <Link to="/" className="back-home-button">⬅</Link>
        </div>
    );
};

export default Login;