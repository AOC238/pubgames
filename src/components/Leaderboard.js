// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import '../styles/Leaderboard.css';

function Leaderboard({ navigate }) {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    // Simulate fetching data with a delay
    const data = [
      { rank: 1, name: "Alice", score: 95 },
      { rank: 2, name: "Bob", score: 90 },
      { rank: 3, name: "Charlie", score: 85 },
    ];
    setTimeout(() => setMockData(data), 500);
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ul className="leaderboard-list">
        {mockData.map(item => (
          <li key={item.rank} className="fade-in">
            <span className="rank">{item.rank}.</span> {item.name} - {item.score} pts
          </li>
        ))}
      </ul>
      <button className="back-button" onClick={() => navigate('home')}>Back</button>
    </div>
  );
}

export default Leaderboard;
