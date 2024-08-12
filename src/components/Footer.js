import React, { useState } from 'react';
import './Footer.css';
import Home from './Home';
import Favorites from './Favorites';
import Playlists from './Playlists';
import LocalMusic from './LocalMusic';

const Footer = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'favorites':
                return <Favorites />;
            case 'playlists':
                return <Playlists />;
            case 'localMusic':
                return <LocalMusic />;
            default:
                return <Home />;
        }
    };

    return (
        <>
            <div className="footer">
                <button onClick={() => setActiveTab('home')}>Home</button>
                <button onClick={() => setActiveTab('favorites')}>Favorites</button>
                <button onClick={() to setActiveTab('playlists')}>Playlists</button>
                <button onClick={() to setActiveTab('localMusic')}>Local Music</button>
            </div>
            <div className="content">
                {renderTabContent()}
            </div>
        </>
    );
};

export default Footer;
