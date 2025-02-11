import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // here needed to add a server  log in logic
        console.log('User Logged In:', { username, password });
    };

    return (
        <div className="login">
            <h2>Log in - HarmonyHub</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="username">username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label for="password">password:</label>
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
        </div>
    );
};

export default Login;