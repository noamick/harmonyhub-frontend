import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // כאן נוסיף את הלוגיקה לשליחת הנתונים לשרת להירשם
        console.log('User Registered:', { username, email, password });
    };

    return (
        <div className="register">
            <h2>הירשם ל-HarmonyHub</h2>
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
                    <label for="email">אימייל:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <button type="submit">הרשמה</button>
            </form>
        </div>
    );
};

export default Register;
