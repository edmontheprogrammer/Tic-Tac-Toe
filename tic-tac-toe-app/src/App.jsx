import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'



function Square({ value, onSquareClick }) {

  return (<button className='square' onClick={onSquareClick}>
          {value}
          </button>); 
          
        
}


export default function Board() {
  const [xIsNext, setxIsNext] = useState(true); 
  const [squares, setSquares] = useState(Array(9).fill(null)); 

  function handlClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return; 
    }
    const nextSquares = squares.slice(); 
    if (xIsNext) {
      nextSquares[i] = "X"; 
    } else {
      nextSquares[i] = "O"; 
    }
    setSquares(nextSquares); 
    setxIsNext(!xIsNext); 
  }

  const winner = calculateWinner(squares); 
  let status; 
  if (winner) {
    status = "Winner: " + winner; 
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O"); 
  }

  return (
    <>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={ () => handlClick(0)}/>
        <Square value={squares[1]} onSquareClick={ () => handlClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handlClick(2)}  />
      </div>

       <div className='board-row'>
          <Square value={squares[3]} onSquareClick={() => handlClick(3)}/>
          <Square  value={squares[4]} onSquareClick={() => handlClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handlClick(5)}/>
       </div>

        <div className='board-row'>
          <Square  value={squares[6]} onSquareClick={() => handlClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handlClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handlClick(8)}/>
        </div>
    </>
  ) 
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
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; 
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null; 
}

