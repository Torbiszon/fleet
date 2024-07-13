import React from 'react';
import { useAuth } from '../AuthContext';

const Dashboard = () => {
    const auth = useAuth();

    if (!auth.isAuthenticated) {
        return <h2>Proszę się zalogować, aby zobaczyć tę stronę.</h2>;
    }

    return (
        <div style={{ paddingTop: '80px' }}>
            <h1>Dashboard</h1>
            <p>Tutaj treść dostępna tylko dla zalogowanych użytkowników.</p>
        </div>
    );
};

export default Dashboard;
