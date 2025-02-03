// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import PlayScreen from './components/PlayScreen';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings';

function App() {
  const [screen, setScreen] = useState('home');

  const navigate = (target) => {
    setScreen(target);
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
      {content}
    </div>
  );
}

export default App;
