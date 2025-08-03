import { useRef, useState } from 'react';
import Styles from './TicTacToe.module.css';
import Circle_icon from '../Assets/tic-tac-toe-circle.png';
import Cross from '../Assets/tic-tac-toe-cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [history, setHistory] = useState([]);
  const [status, setStatus] = useState("Next player: X");
  const titleRef = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }

    let player;
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${Cross}" />`;
      data[num] = "x";
      player = "X";
    } else {
      e.target.innerHTML = `<img src="${Circle_icon}" />`;
      data[num] = "0";
      player = "O";
    }

    const row = Math.floor(num / 3) + 1;
    const col = (num % 3) + 1;

    setHistory((prev) => [
      ...prev,
      `Move #${prev.length + 1}: ${player} at (Row ${row}, Col ${col})`,
    ]);

    const newCount = count + 1;
    setCount(newCount);

    checkWin();

    if (!lock) {
      if (newCount === 9 && !checkWinner(data)) {
        setStatus("Game Draw");
      } else {
        const nextPlayer = newCount % 2 === 0 ? "X" : "O";
        setStatus(`Next player: ${nextPlayer}`);
      }
    }
  };

  const checkWin = () => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[b] === data[c]) {
        Won(data[a], pattern);
        return;
      }
    }
  };

  const checkWinner = (arr) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of winPatterns) {
      if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  };

  const Won = (winner, winPattern) => {
    setLock(true);

    winPattern.forEach((i) => {
      box_array[i].current.classList.add(Styles.winningBox);
    });

    const winnerImg = winner === "x" ? Cross : Circle_icon;
    const winnerText = winner === "x" ? "X" : "O";

    titleRef.current.innerHTML = `Winner :<img src="${winnerImg}" />`;
    setStatus(`Winner: ${winnerText}`);
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = '<span>Tic Tac Toe Game</span>';
    box_array.forEach((box) => {
      box.current.innerHTML = "";
      box.current.classList.remove(Styles.winningBox);
    });
    setCount(0);
    setHistory([]);
    setStatus("Next player: X");
  };

  return (
    <div className={Styles.Container}>
      <h1 className={Styles.title} ref={titleRef}>
        <span>Tic Tac Toe Game</span>
      </h1>

      <div className={Styles.status}>{status}</div>

      <div className={Styles.board}>
        <div className={Styles.Row1}>
          <div className={Styles.box} ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className={Styles.box} ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className={Styles.box} ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className={Styles.Row2}>
          <div className={Styles.box} ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className={Styles.box} ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className={Styles.box} ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className={Styles.Row3}>
          <div className={Styles.box} ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className={Styles.box} ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className={Styles.box} ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <button className={Styles.Reset} onClick={reset}>
        Reset
      </button>

      <div className={Styles.history}>
        <h3>Move History</h3>
        <ol>
          {history.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TicTacToe;