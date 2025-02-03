import React from 'react';
import '../styles/Home.css';

function Home({ onPlay }) {
  return (
    <div className="home-container">
      <h1 className="home-title">PubQuiz</h1>
      <button className="play-button" onClick={onPlay}>
        Play
      </button>
    </div>
  );
}

export default Home;
