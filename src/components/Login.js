import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './AuthForm.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "admin" && password === "admin") {
            auth.login();
            navigate('/dashboard');
        } else {
            alert('Nieprawidłowa nazwa użytkownika lub hasło');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Logowanie</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Nazwa użytkownika:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Wpisz nazwę użytkownika"
                        required
                    />
                    <label htmlFor="password">Hasło:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Wpisz hasło"
                        required
                    />
                    <button type="submit">Zaloguj się</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
