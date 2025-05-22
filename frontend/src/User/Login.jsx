import React, { useState } from 'react';
import '../UserStyles/Form.css';
import { Link } from 'react-router-dom';

function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log('Hello');
    }

    return (
        <div className="form-container container">
            <div className="form-content">
                <form className="form" onSubmit={loginSubmit}>
                    <div className="input-group">
                        <input type="email" placeholder='Email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    </div>
                    <button className="authBtn">Sign In</button>
                    <p className="form-links">Forgot your Password? <Link to="/password/forgot">Reset Here</Link></p>
                    <p className="form-links">Don't have an account? <Link to="/register">Sign up here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
