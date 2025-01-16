// components/Home.js
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <h1>Welcome to HarmonyHub!</h1>
            <p>Your one-stop hub for sharing and enjoying music.</p>
            <div style={{marginTop: '20px'}}>
                <Link to="/register">
                    <button style={{margin: '5px', padding: '10px 20px', cursor: 'pointer'}}>
                        Register
                    </button>
                </Link>
                <Link to="/login">
                    <button style={{margin: '5px', padding: '10px 20px', cursor: 'pointer'}}>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
