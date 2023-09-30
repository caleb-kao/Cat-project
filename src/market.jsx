import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import App from './App';

const Applet = (props) => {
  const navigate = useNavigate();
  const data = [
    {
      yarn: 3,
      ball: 1,
      mousetoy: 2,
      feather: 3,
      bell: 4,
      bubblewrap: 5,
      catnip: 6,
      treats: 5,
    }];


  function logOut() {
    sessionStorage.clear();
    return window.location.href = "login.html"
  };

  return (
    <div className="mainPage">
      <h1>Try Again</h1>
      <div className="CenterIt">
        <button className="bttn" onClick={() => window.location.href = "index.html"}> Back to Main </button>
        <button className="bttn" onClick={logOut}> Log Out </button>
      </div>

      <table>
        <tr>
          <th>Yarn</th>
          <th>Ball</th>
          <th>Mousetoy</th>
          <th>Feather</th>
          <th>Bell</th>
          <th>Bubblewrap</th>
          <th>Catnip</th>
          <th>Treats</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.yarn}</td>
              <td>{val.ball}</td>
              <td>{val.mousetoy}</td>
              <td>{val.feather}</td>
              <td>{val.bell}</td>
              <td>{val.bubblewrap}</td>
              <td>{val.catnip}</td>
              <td>{val.treats}</td>
            </tr>
          )
        })}
      </table>

      {/* <Routes>
        <Route path="/signup" element={<Applet />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
}


export default Applet;