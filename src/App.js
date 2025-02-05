// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import PlayScreen from './components/PlayScreen';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings';
import './styles/App.css';

function App() {
  const [screen, setScreen] = useState('home');
  // Initialize registration from localStorage (or null if not present)
  const [registration, setRegistration] = useState(() => {
    const stored = localStorage.getItem('registration');
    return stored ? JSON.parse(stored) : null;
  });

  const navigate = (target) => {
    setScreen(target);
  };

  let content;
  switch (screen) {
    case 'home':
      content = <Home navigate={navigate} />;
      break;
    case 'register':
      content = (
        <Register
          navigate={navigate}
          registration={registration}
          setRegistration={setRegistration}
        />
      );
      break;
    case 'play':
      content = <PlayScreen navigate={navigate} />;
      break;
    case 'leaderboard':
      content = <Leaderboard navigate={navigate} />;
      break;
    case 'settings':
      content = <Settings navigate={navigate} />;
      break;
    default:
      content = <Home navigate={navigate} />;
  }

  return (
    <div className="app-container">
      <Header navigate={navigate} registration={registration} />
      <main className="main-content">{content}</main>
    </div>
  );
}

export default App;
