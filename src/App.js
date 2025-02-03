// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import PlayScreen from './components/PlayScreen';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings';
import BottomNav from './components/BottomNav.js';
import './styles/App.css';

function App() {
  const [screen, setScreen] = useState('home');

  // Optionally, load persisted screen from localStorage (for continuity)
  useEffect(() => {
    const storedScreen = localStorage.getItem('currentScreen');
    if (storedScreen) setScreen(storedScreen);
  }, []);

  const navigate = (target) => {
    setScreen(target);
    localStorage.setItem('currentScreen', target);
  };

  let content;
  switch (screen) {
    case 'home':
      content = <Home navigate={navigate} />;
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
      <Header navigate={navigate} />
      <main className="main-content">{content}</main>
      <BottomNav navigate={navigate} />
    </div>
  );
}

export default App;
