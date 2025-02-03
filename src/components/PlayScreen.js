import React, { useState } from 'react';
import '../styles/PlayScreen.css';

function PlayScreen({ onBack }) {
  const [name, setName] = useState('');
  const [pub, setPub] = useState('');
  const [scores, setScores] = useState({ game1: '', game2: '', game3: '' });

  const handleScoreChange = (e) => {
    setScores({
      ...scores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process or send the data as needed.
    alert(
      `Submitted!\nName: ${name}\nPub: ${pub}\nScores: ${JSON.stringify(scores)}`
    );
  };

  return (
    <div className="play-container">
      <h2>Guess the scores for the three games this weekend</h2>
      <form onSubmit={handleSubmit} className="play-form">
        <div className="form-group">
          <label htmlFor="game1">Game 1 Score:</label>
          <input
            type="number"
            id="game1"
            name="game1"
            value={scores.game1}
            onChange={handleScoreChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="game2">Game 2 Score:</label>
          <input
            type="number"
            id="game2"
            name="game2"
            value={scores.game2}
            onChange={handleScoreChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="game3">Game 3 Score:</label>
          <input
            type="number"
            id="game3"
            name="game3"
            value={scores.game3}
            onChange={handleScoreChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pub">Your Pub:</label>
          <input
            type="text"
            id="pub"
            value={pub}
            onChange={(e) => setPub(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <button type="button" className="back-button" onClick={onBack}>
          Back
        </button>
      </form>
    </div>
  );
}

export default PlayScreen;
