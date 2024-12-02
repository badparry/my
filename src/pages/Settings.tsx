import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      
      <div className="settings-section">
        <h3>Preferences</h3>
        <div className="setting-item">
          <label>
            Notifications
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          </label>
        </div>
        
        <div className="setting-item">
          <label>
            Dark Mode
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </label>
        </div>
        
        <div className="setting-item">
          <label>
            Currency
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Security</h3>
        <button className="security-button">Change Password</button>
        <button className="security-button">Enable 2FA</button>
        <button className="security-button">Backup Wallet</button>
      </div>
    </div>
  );
}

export default Settings;