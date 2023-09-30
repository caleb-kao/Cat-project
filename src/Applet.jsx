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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
          aliquid ratione facere enim eveniet modi necessitatibus quas
          asperiores pariatur, amet velit?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
          aliquid ratione facere enim eveniet modi necessitatibus quas
          asperiores pariatur, amet velit?
        </p>
      </div>
    </div>
  );
};

export default Applet;