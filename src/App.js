import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import WhyWildr from "./WhyWildr";
//import Challenges from "./Challenges";
import FAQ from "./FAQ"; // Make sure this import path is correct
import './App.css';

function App() {
  const homeRef = React.createRef();
  const whyWildrRef = React.createRef();
 //const challengesRef = React.createRef();
  const faqRef = React.createRef(); // Reference for the FAQ section

  const scrollToRef = (ref) => {
    if(ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar 
        onHomeClick={() => scrollToRef(homeRef)}
        onWhyWildrClick={() => scrollToRef(whyWildrRef)}
       // onChallengesClick={() => scrollToRef(challengesRef)}
        onFAQClick={() => scrollToRef(faqRef)} // Add a click handler for FAQ
      />
      <main>
        <div ref={homeRef}><Home /></div>
        <div ref={whyWildrRef}><WhyWildr /></div> 
        <div ref={faqRef}><FAQ /></div> {/* Add the FAQ section here */}
      </main>
    </div>
  );
}

export default App;
