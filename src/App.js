import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className={`app-container ${isLoggedIn ? '' : 'login-mode'}`}>
            {isLoggedIn ? (
                <>
                    <Header />
                    <main>
                        <Home />
                    </main>
                    <Footer />
                </>
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
};

export default App;
