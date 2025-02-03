// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

function Home({ navigate }) {
  return (
    <div className="home-container">
      {/* Optionally, you can replace this with a background video */}
      <div className="hero-overlay">
        <h1 className="home-title">Welcome to PubQuiz!</h1>
        <p className="home-subtitle">
          Challenge your friends and guess this weekend’s match scores!
        </p>
        <button className="play-button" onClick={() => navigate('play')}>
          Play Now
        </button>
      </div>
    </div>
  );
}

export default Home;
