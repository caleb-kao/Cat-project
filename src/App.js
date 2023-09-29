import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {

  const [board, setBoard] = useState([['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]);
  const [XorO, setXorO] = useState('O')

  function boxUpdate(row, column) {
    let newBoard = [...board];
    if (XorO === "X") setXorO("O");
    else setXorO("X");
    newBoard[row][column] = XorO;
    setBoard(newBoard);
  }

  function clearBoard() {
    setBoard([['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']])
  }

  const Row = () => {
    let rowArray = [];
    for (let x = 0; x < 3; x++) {
      rowArray[x] = [];
      for (let i = 0; i < 3; i++) {
        let box = <Box text={board[x][i]} clickFunc={boxUpdate} key={i} row={x} column={i} />;
        rowArray[x].push(box);
      }
    }

    return (
      <div class="CenterIt">
        <div class="Row">{rowArray[0]}</div>
        <div class="Row">{rowArray[1]}</div>
        <div class="Row">{rowArray[2]}</div>
      </div>)
  }

  return (
    <>
      <h1 class="CenterIt">Tic Tac Toe</h1>
      <label class="CenterIt">A Product by Caleb and Christopher</label>
      <Row />
      <div class="CenterIt">
        <button onClick={clearBoard} style={{ height: "20px", width: "50px" }}>
          <>RESET</>
        </button>
      </div>

    </>
  );
}

const Box = (props) => {
  return (
    <>
      <button onClick={() => props.clickFunc(props.row, props.column)} className="Box" style={{ color: "green", height: "100px", width: "100px" }}>
        <h2>{props.text}</h2>
      </button>
    </>
  )
}

export default App;

