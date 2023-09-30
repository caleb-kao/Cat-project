import React, { useState, useEffect } from 'react';
import Applet from './market';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './login';
import slotmachine from '../assets/slotmachine.gif'
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
        <button className="btn" onClick={() => window.location.href = "market.html"}>
          Cat Shop
        </button>
        <button className="btn" onClick={() => window.location.href = "login.html"}>
          Log Out
        </button>
      </div>

      <div className="center">
        <img src={slotmachine} alt="test cat" />
      </div>
      <div className="prizes">
        <table>
          <tr>
            <th>Yarn</th>
            <th>Mouse Toy</th>
            <th>Ball</th>
            <th>Feather</th>
            <th>Bubble Wrap</th>
            <th>Bell</th>
            <th>Catnip</th>
            <th>Treats</th>
          </tr>
          <tr>
            <td>5</td>
            <td>12</td>
            <td>3</td>
            <td>16</td>
            <td>12</td>
            <td>6</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </table>
      </div>




      {/* <Routes>
        <Route path="/signup" element={<Applet />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}


export default App;

