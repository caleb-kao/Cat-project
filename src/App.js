import React, { useState, useEffect } from 'react';
import Applet from './market';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './login';
import slotmachine from '../assets/slotmachine.gif'
import staticslotmachine from '../assets/slotmachine.png'
import { createRoot } from 'react-dom/client';


function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}


const App = () => {
  const navigate = useNavigate()
  const [materials, setMaterials] = useState([5, 5, 5, 5, 5, 5, 0, 0]);
  const data = [
    {
      yarn: materials[0],
      ball: materials[1],
      mousetoy: materials[2],
      feather: materials[3],
      bell: materials[4],
      bubblewrap: materials[5],
      catnip: materials[6],
      treats: materials[7],
    },
  ]
  const { token, setToken } = useToken();
  // console.log(token)
  if (!token) {
    return <Login setToken={setToken} />
  }

  function logOut() {
    sessionStorage.clear();
    return window.location.href = "login.html"
  }
  const GifComponent = () => {
    const [gifVisible, setGifVisible] = useState(false);

    const toggleGif = () => {
      setGifVisible(!gifVisible);
    };

    // const play = () => {
    //   let newMaterials = [...materials];
    //   for (let i = 0; i < newMaterials.length; i++) {
    //     newMaterials[i] += Math.floor(Math.random() * 1.5);
    //   }
    //   setMaterials(newMaterials);
    // }

    // const handleClick = () => {
    //   toggleGif();
    //   play();
    // };

    return (
      <div>
        <button className="bttn" onClick={toggleGif}>Toggle Gif</button>
        {gifVisible && <img src={slotmachine} alt="GIF" />}
        {!gifVisible && <img src={staticslotmachine} alt="GIF" />}

      </div>

    );
  };
  function play(row, column) {
    let newMaterials = [...materials];
    for (let i = 0; i < newMaterials.length; i++) {
      newMaterials[i] += Math.floor(Math.random() * 1.5);
    }
    setMaterials(newMaterials);
  }

  return (
    <div className="mainPage">
      <h1>Try Again</h1>
      <div className="CenterIt">
        <button className="bttn" onClick={() => window.location.href = "market.html"}> Cat Shop </button>
        <button className="bttn" onClick={logOut}> Log Out </button>
        <button className="bttn" onClick={play}> Play for Prizes! </button>
      </div>
      <GifComponent />
      {/* <div className="center">
        <img src={slotmachine} alt="test cat" />
      </div> */}
      {/* <button className="btn" onClick={play}>
        Play
      </button> */}
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


export default App;

