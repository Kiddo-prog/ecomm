import React from 'react';
import ApiHeader from './cHeader';
import Dashboard from './Dashboard';

function Header() {
    return (
        <div>
            Welcome to Mubi E-commerce site
            <ApiHeader />
            <Dashboard />
        </div>
    )
}

export default Header
