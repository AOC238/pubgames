// src/components/Leaderboard.js
import React from 'react';
import '../styles/Leaderboard.css';

function Leaderboard({ navigate }) {
  const mockData = [
    { rank: 1, name: "Alice", score: 95 },
    { rank: 2, name: "Bob", score: 90 },
    { rank: 3, name: "Charlie", score: 85 },
  ];

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ul className="leaderboard-list">
        {mockData.map(item => (
          <li key={item.rank}>
            <span className="rank">{item.rank}.</span> {item.name} - {item.score} pts
          </li>
        ))}
      </ul>
      <button className="back-button" onClick={() => navigate('home')}>Back</button>
    </div>
  );
}

export default Leaderboard;
