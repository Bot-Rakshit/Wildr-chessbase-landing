import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showGiftClaimForm, setShowGiftClaimForm] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [claimSuccess, setClaimSuccess] = useState(false);

  const toggleGiftClaimForm = () => {
    setShowGiftClaimForm(!showGiftClaimForm);
  };

  const handleClaimGiftClick = () => {
    setShowGiftClaimForm(true);
  };

  const handleClaimNowClick = async () => {
    try {
      const response = await fetch('http://139.59.79.118:5001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });
  
      if (response.ok) {
        setClaimSuccess(true);
        // Additional success logic here
      } else {
        // Handle HTTP errors
      }
    } catch (error) {
      console.error(error);
      // Handle network errors
    }
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="content-area">
          <img src={`${process.env.PUBLIC_URL}/CHESS.png`} alt="Wildr X Chess" className="logo" />
          <p className="hero-subtitle">
            <span className="text-normal">A community of intellect and integrity.</span>
            <br />
            <span className="highlight">No toxicity, no abuse, no trolls.</span>
            <br />
            <span className="text-normal">Share and win alongside champions like Vidit and Anish</span>
          </p>
          <div className="hero-cta">
            <button className="cta-button cta-claim-gift" onClick={handleClaimGiftClick}>Claim Your Free Gift</button>
          </div>
        </div>
      </div>

      {showGiftClaimForm && (
        <div className="gift-claim-form-modal">
          <div className="modal-content">
            <button onClick={toggleGiftClaimForm} className="close-modal">✕</button>
            {!claimSuccess ? (
              <>
                <h2>Congratulations on Winning!</h2>
                <p>You've earned a 1 Month Free ChessBase Premium Account. Enter your details to claim your prize.</p>
                <form className="claim-form">
                  <div className="form-group">
                    <label htmlFor="username">Wildr Username</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <button type="button" onClick={handleClaimNowClick} className="cta-button cta-claim-now">Claim Now</button>
                  </div>
                </form>
              </>
            ) : (
              <p className="success-message">Awesome! Your free ChessBase Premium account will be activated soon. Check your email for details.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
