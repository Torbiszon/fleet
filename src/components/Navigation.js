import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navigation.css';

const Navigation = () => {
    const auth = useAuth();

    return (
        <nav className="nav">
            <div className="nav-links">
                {!auth.isAuthenticated && <Link to="/">Home</Link>}
                {!auth.isAuthenticated && <Link to="/login">Login</Link>}
                {!auth.isAuthenticated && <Link to="/register">Register</Link>}
                {auth.isAuthenticated && <Link to="/profile">Profile</Link>}
                {auth.isAuthenticated && <Link to="/settings">Settings</Link>}
            </div>
            {auth.isAuthenticated && (
                <button className="logout-button" onClick={auth.logout}>Logout</button>
            )}
        </nav>
    );
};

export default Navigation;
