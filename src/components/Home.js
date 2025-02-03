// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

function Home({ navigate }) {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to PubQuiz!</h1>
      <p className="home-subtitle">
        Test your knowledge and guess the scores for this weekend’s matches.
      </p>
      <button className="play-button" onClick={() => navigate('play')}>
        Play
      </button>
    </div>
  );
}

export default Home;
