// src/components/SixNations.js
import React from 'react';
import '../styles/SixNations.css';

function SixNations({ navigate }) {
  return (
    <div className="sixnations-container">
      <h2>Six Nations Score Prediction</h2>
      <p>This is the score prediction interface for the Six Nations game. Build your prediction form here.</p>
      <button onClick={() => navigate('home')}>Back to Home</button>
    </div>
  );
}

export default SixNations;
