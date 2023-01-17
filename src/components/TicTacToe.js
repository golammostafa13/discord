import React, { useState } from "react";
import resetClickSound from "../media/client_public_sound_click.mp3";
import squareClickSound from "../media/iconSound.wav";
import successSound from "../media/client_public_sound_success.mp3";

function Square({ value, onClick }) {
  return (
    <button
      className={`w-36 h-36 m-1 flex justify-center items-center text-5xl ${
        value === "X" ? "bg-gray-600" : "bg-green-600"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(squares);
  const audio1 = new Audio(squareClickSound);
  const audio2 = new Audio(successSound);
  function handleClick(i) {
    if (winner || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
    audio1.play();
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
    audio2.play();
  } else if (isAllFilled(squares)) {
    status = `Draw`;
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }
  const audio = new Audio(resetClickSound);

  return (
    <div>
      <div className="text-2xl flex justify-center text-white mb-2 uppercase">
        {status}
      </div>
      <div className="flex flex-wrap shadow-lg">
        <div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button
        className="text-green-400 text-lg font-bold border-2 px-2 py-1 border-solid border-green-600 hover:bg-green-500 hover:text-white flex justify-center gap-1 mt-4 w-full"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
          audio.play();
        }}
      >
        Reset
      </button>
    </div>
  );
}

function TicTacToe() {
  return (
    <div className="flex my-20 justify-center">
      <Board />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const element of lines) {
    const [a, b, c] = element;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isAllFilled(squares) {
  return squares.filter((square) => square === null).length === 0;
}

export default TicTacToe;
