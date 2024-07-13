import React, { useState } from 'react';
import './AuthForm.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        // Logika rejestracji
        console.log('Rejestracja:', username, email, password);
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Rejestracja</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="username">Nazwa użytkownika:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Wpisz nazwę użytkownika"
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Wpisz email"
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
                    <button type="submit">Zarejestruj</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
