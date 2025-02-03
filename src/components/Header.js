import React from 'react';
import '../styles/Header.css';

function Header() {
  const handleSettings = () => {
    alert('Settings clicked!');
  };

  const handleLeaderboards = () => {
    alert('Leaderboards clicked!');
  };

  return (
    <header className="header">
      <button className="header-btn settings-btn" onClick={handleSettings}>
        Settings
      </button>
      <div className="header-title">PubQuiz</div>
      <button className="header-btn leaderboard-btn" onClick={handleLeaderboards}>
        Leaderboards
      </button>
    </header>
  );
}

export default Header;
