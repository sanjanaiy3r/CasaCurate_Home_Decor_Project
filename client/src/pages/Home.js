import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to CasaCurate</h1>
        <p>Curating spaces, building dreams</p>
        <div className="cta-buttons">
          <Link to="/products" className="cta-button">Shop Now</Link>
          <Link to="/quiz" className="cta-button">Take Style Quiz</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
