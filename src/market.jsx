import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Applet = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Second page</h1>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="about-container">
        <p>
          This is currently a placeholder page. Eventually it will have a market where you can trade in your prizes in return for cats, which you can then place throughout your room. Just imagine there is a nice image of a room with lots of divs where you can place cats.
        </p>
        <p>
          What, does this need a second paragraph?
        </p>
      </div>
    </div>
  );
};

export default Applet;