import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // כאן נוסיף את הלוגיקה לשליחת הנתונים לשרת להתחברות
        console.log('User Logged In:', { username, password });
    };

    return (
        <div className="login">
            <h2>התחבר ל-HarmonyHub</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="username">שם משתמש:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label for="password">סיסמה:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">התחבר</button>
            </form>
        </div>
    );
};

export default Login;