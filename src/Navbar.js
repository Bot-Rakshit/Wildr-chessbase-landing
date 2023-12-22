import React, { useState } from 'react';
import './Navbar.css'; // Make sure to include your CSS file

// Add `onFAQClick` to the destructured props
const Navbar = ({ onHomeClick, onWhyWildrClick, onChallengesClick, onFAQClick }) => {
  const [showJoinModal, setShowJoinModal] = useState(false);

  const toggleJoinModal = () => {
    setShowJoinModal(!showJoinModal);
  };

  return (
    <>
      <nav className="bg-green-800 text-white px-4 py-2 flex items-center justify-between">
        <a onClick={onHomeClick} className="cursor-pointer flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/CHESS.png`}
            alt="Home"
            style={{ width: '220px', height: 'auto' }}
          />
        </a>
        <ul className="flex space-x-6">
          <li className="font-semibold hover:text-green-300 transition duration-300">
            <a onClick={onWhyWildrClick}>Why Wildr</a>
          </li>
          <li className="font-semibold hover:text-green-300 transition duration-300">
            <a onClick={onFAQClick}>FAQ</a> {/* Add FAQ item here */}
          </li>
        </ul>

        <button onClick={toggleJoinModal} className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-full border-4 border-red-900 hover:border-red-800 text-white font-semibold shadow-lg transition duration-300">
          Join Wildr
        </button>
      </nav>

      {showJoinModal && (
        <div className="join-modal">
          <div className="modal-content">
            <button onClick={toggleJoinModal} className="close-modal">✕</button>
            <img src={`${process.env.PUBLIC_URL}/wildr.svg`} alt="Wildr Logo" className="modal-logo" />
            {/* Include additional sign-up form fields or information here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
