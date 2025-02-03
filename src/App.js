import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import PlayScreen from './components/PlayScreen';

function App() {
  const [screen, setScreen] = useState('home');

  const handlePlay = () => {
    setScreen('play');
  };

  const handleBackToHome = () => {
    setScreen('home');
  };

  return (
    <div className="app-container">
      <Header />
      {screen === 'home' && <Home onPlay={handlePlay} />}
      {screen === 'play' && <PlayScreen onBack={handleBackToHome} />}
    </div>
  );
}

export default App;
