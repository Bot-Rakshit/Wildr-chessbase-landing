import React, { useState } from 'react';
import './Challenges.css';
import { FaLock } from 'react-icons/fa';

const Challenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    { id: 1, title: 'Challenge 1', thumbnail: '/CHALLENGE.png', deadline: 'Date', details: 'Details' },
    { id: 2, title: 'Challenge 2', thumbnail: '/CHALLENGE.png', deadline: 'Date', details: 'Details' },
    { id: 3, title: 'Challenge 3', thumbnail: '/CHALLENGE.png', deadline: 'Date', details: 'Details', locked: true },
    // ... other challenges
  ];

  const openChallenge = (challenge) => {
    if (challenge.locked) {
      alert('This challenge has not started yet.');
    } else {
      setSelectedChallenge(challenge);
    }
  };

  const closeChallenge = () => {
    setSelectedChallenge(null);
  };

  return (
    <div className="challenges-container">
      <h2 className="challenges-heading">Win Daily in Our Chess Challenges</h2>
      <p className="challenges-description">
        Engage in daily challenges, improve your skills, and win amazing prizes. Perfect your moves in a friendly, competitive environment.
      </p>
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`challenge-card ${challenge.locked ? 'locked' : ''}`}
            onClick={() => openChallenge(challenge)}
          >
            {challenge.locked && (
              <FaLock
                className="lock-icon"
                style={{
                  fontSize: '2em', // Increase the lock symbol size
                  marginRight: '5px', // Add some spacing between the symbol and title
                }}
              />
            )}
            <img src={challenge.thumbnail} alt={challenge.title} className="challenge-thumbnail" />
            <div className="challenge-info">
              <h3 className="challenge-title">{challenge.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedChallenge && (
        <div className="challenge-dialog">
          <div className="dialog-content">
            <img src={selectedChallenge.thumbnail} alt={selectedChallenge.title} className="dialog-thumbnail" />
            <h3 className="dialog-title">{selectedChallenge.title}</h3>
            <p className="dialog-details">{selectedChallenge.details}</p>
            <p className="dialog-deadline">Deadline: {selectedChallenge.deadline}</p>
            <button onClick={closeChallenge} className="dialog-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenges;
