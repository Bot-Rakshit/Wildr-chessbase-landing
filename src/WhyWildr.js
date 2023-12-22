import React, { useState } from 'react';
import './WhyWildr.css';

const InfoBox = ({ title, description, image }) => (
  <div className="info-box">
    {image && <img src={image} alt={title} className="info-image" />}
    <h3 className="info-title">{title}</h3>
    <p className="info-description">{description}</p>
  </div>
);

const AmbassadorCard = ({ name, image, title, onClick, modalImage, isSelected }) => (
  <div className={`ambassador-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
    <img src={image} alt={name} className="ambassador-image" />
    <h3 className="ambassador-name">{name}</h3>
    <p className="ambassador-title">{title}</p>
    {isSelected && modalImage && (
      <div className="modal-preview">
        <img src={modalImage} alt={name} />
      </div>
    )}
  </div>
);

const WhyWildr = () => {
  const [selectedAmbassador, setSelectedAmbassador] = useState(null);

  const ambassadors = [
    { name: "Anish Giri", image: "Anish.png", title: "Grandmaster", modalImage: "Anishwildr.png" },
    { name: "Vidit Gujrathi", image: "VD.png", title: "Grandmaster", modalImage: "VDwildr.png" },
    { name: "Sagar Shah", image: "sagar.png", title: "Chessbase India", modalImage: "Sagarwildr.png" },
    { name: "Sopiko", image: "Anish (1).png", title: "International master", modalImage: "Sopikowildr (1).png" },
    // ... other ambassadors with modal images
  ];

  const openAmbassadorModal = (ambassador) => {
    setSelectedAmbassador(ambassador);
  };

  const closeAmbassadorModal = () => {
    setSelectedAmbassador(null);
  };

  const infoSections = [
    {
      title: "Toxicity-Free Environment",
      description: "At Wildr, enjoy chess without the negativity. Our community upholds respect and sportsmanship.",
      image: "INFOBOXFINAL1.png",
    },
    {
      title: "Exlusive Raw footages",
      description: "Unlock exclusive raw footage from prestigious chess tournaments, providing an unparalleled glimpse into the intense world of competitive chess",
      image: "INFOBOXFINAL2.png", // Replace with actual image path
    },
    {
      title: "Participate in Challenges and Win Big",
      description: "Engage in thrilling challenges and seize the opportunity to win big – immerse yourself in creative contests that celebrate your favorite chess players and moments",
      image: "INFOBOXFINAL3.png", // Replace with actual image path
    },

  ];

  return (
    <section className="why-wildr-section">
      <h2 className="section-title">Why Choose Wildr</h2>
      <p className="section-description">
        Wildr is a platform dedicated to the chess community, providing a space for learning,
        competition, and growth free from toxicity. Join us and share your chess journey alongside renowned ambassadors.
      </p>

      <div className="info-sections-container">
        {infoSections.map((section, index) => (
          <InfoBox
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
          />
        ))}
      </div>

      <div class="ambassador-text">
  <h2>Our Ambassadors</h2>
</div>


      <div className="ambassadors-container">
        {ambassadors.map((ambassador, index) => (
          <AmbassadorCard
            key={index}
            name={ambassador.name}
            image={ambassador.image}
            title={ambassador.title}
            modalImage={ambassador.modalImage}
            isSelected={selectedAmbassador === ambassador}
            onClick={() => openAmbassadorModal(ambassador)}
          />
        ))}
      </div>

      {selectedAmbassador && (
        <div className="ambassador-modal active">
          <div className="modal-content">
            <button onClick={closeAmbassadorModal} className="close-button">Close</button>
            <img src={selectedAmbassador.modalImage} alt="Ambassador" className="modal-image" />
            <button onClick={closeAmbassadorModal} className="join-button">Join Wildr to View</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyWildr;
