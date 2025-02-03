// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

function Header({ navigate }) {
  return (
    <header className="header">
      <button className="header-btn" onClick={() => navigate('settings')}>
        Settings
      </button>
      <div className="header-title" onClick={() => navigate('home')}>
        PubQuiz
      </div>
      <button className="header-btn" onClick={() => navigate('leaderboard')}>
        Leaderboards
      </button>
    </header>
  );
}

export default Header;
