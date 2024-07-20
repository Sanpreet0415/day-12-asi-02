import React from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="profile-container">
      <p className="name">
        <span>Lindsey</span>
        <span> </span>
        <span>James</span>
      </p>
      <p className="handle">@lindsey_jam3s</p>
      <p className="description">
        <span>Actress, musician, songwriter PM for work inquiries or</span>
      </p>
      <p className="hashtag">#ART #PHOTOGRAPHY #MUSIC</p>

      {/* Message Box */}
      <div className="message-box">
        <p className="message">Send a message to Lindsey</p>
        <div className="button-container">
          <button className="follow-button">Follow</button>
          <button className="message-button">Message</button>
        </div>
      </div>
    </div>
  );
};

export default App;
