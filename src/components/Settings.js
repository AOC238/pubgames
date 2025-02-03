// src/components/Settings.js
import React from 'react';
import '../styles/Settings.css';

function Settings({ navigate }) {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p>Mock settings page. Customize your experience here.</p>
      <ul>
        <li>Theme: Light / Dark (Coming Soon)</li>
        <li>Notifications: On / Off (Coming Soon)</li>
        <li>Language: English (Coming Soon)</li>
      </ul>
      <button className="back-button" onClick={() => navigate('home')}>Back</button>
    </div>
  );
}

export default Settings;
