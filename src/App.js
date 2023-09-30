import React, { useState, useEffect } from 'react';
import Applet from './Applet';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './login';
import greencat from '../assets/slotmachine.gif'
import { createRoot } from 'react-dom/client';

// function setToken(userToken) {
// }

// function getToken() {
// }


const App = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState();

  // const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="mainPage">
      <h1>Try Again</h1>
      <div class="CenterIt">
        <button className="btn" onClick={() => window.location.href = "signup.html"}>
          Cat Shop
        </button>
        <button className="btn" onClick={() => window.location.href = "login.html"}>
          Log Out
        </button>
      </div>

      <div className="center">
        <img src={greencat} alt="test cat" />
      </div>

      {/* <Routes>
        <Route path="/signup" element={<Applet />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}


export default App;

