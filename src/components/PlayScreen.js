// src/components/PlayScreen.js
import React, { useState, useEffect } from 'react';
import '../styles/PlayScreen.css';

const matches = [
  { id: 1, teamA: "England", teamB: "France" },
  { id: 2, teamA: "Ireland", teamB: "Wales" },
  { id: 3, teamA: "Scotland", teamB: "Italy" },
];

function PlayScreen({ navigate }) {
  const [userData, setUserData] = useState({
    name: "",
    pub: "",
    scores: matches.map(match => ({ matchId: match.id, scoreA: "", scoreB: "" })),
  });

  // Load previous data from localStorage if exists
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) setUserData(JSON.parse(storedData));
  }, []);

  const handleScoreChange = (matchId, team, value) => {
    setUserData(prevData => {
      const updatedScores = prevData.scores.map(score => {
        if (score.matchId === matchId) {
          return { ...score, [team]: value };
        }
        return score;
      });
      const newData = { ...prevData, scores: updatedScores };
      localStorage.setItem('userData', JSON.stringify(newData));
      return newData;
    });
  };

  const handleChange = (e) => {
    const newData = { ...userData, [e.target.name]: e.target.value };
    setUserData(newData);
    localStorage.setItem('userData', JSON.stringify(newData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted!\nName: ${userData.name}\nPub: ${userData.pub}\nScores: ${JSON.stringify(userData.scores, null, 2)}`);
    // Implement further processing (e.g., API call)
  };

  const handleShare = () => {
    // For demo purposes, we'll simply alert a share message.
    alert('Share your results on social media!');
  };

  return (
    <div className="play-container">
      <h2>Guess This Weekend's Scores</h2>
      <form onSubmit={handleSubmit} className="play-form">
        {matches.map(match => (
          <div key={match.id} className="match-group">
            <h3>{match.teamA} vs {match.teamB}</h3>
            <div className="score-inputs">
              <div>
                <label>{match.teamA}:</label>
                <input
                  type="number"
                  value={userData.scores.find(s => s.matchId === match.id).scoreA}
                  onChange={(e) => handleScoreChange(match.id, 'scoreA', e.target.value)}
                  required
                />
              </div>
              <div>
                <label>{match.teamB}:</label>
                <input
                  type="number"
                  value={userData.scores.find(s => s.matchId === match.id).scoreB}
                  onChange={(e) => handleScoreChange(match.id, 'scoreB', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pub">Your Pub:</label>
          <input type="text" id="pub" name="pub" value={userData.pub} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" className="share-button" onClick={handleShare}>Share</button>
        <button type="button" className="back-button" onClick={() => navigate('home')}>Back</button>
      </form>
    </div>
  );
}

export default PlayScreen;
