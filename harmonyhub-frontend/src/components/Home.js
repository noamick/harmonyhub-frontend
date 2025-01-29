import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to HarmonyHub!</h1>
            <p>Your one-stop hub for sharing and enjoying music.</p>
                <Link to="/register">
                    <button class="login-btn">
                        Register
                    </button>
                </Link>
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
        </div>
    );
}

export default Home;
