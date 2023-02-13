import "./App.css";
import React, { useState } from "react";
import DisplayLogo from "./Components/DisplayLogos";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const logBestScore = () => {
    if (bestScore < score){
      setBestScore(score);
      setScore(0)
    } else{
      setScore(0)
    }
    ;
  };

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <h1>NFL Memory Game!</h1>
          <h3>Click every logo without clicking any twice</h3>
        </div>
        <div className="score">
          <h4>Your score: <strong>{score}</strong>/15</h4>
          <h4>Best Score Achieved: <strong>{bestScore}</strong></h4>
        </div>
      </div>

      <DisplayLogo
        increaseScore={() => increaseScore()}
        logBestScore={() => logBestScore()}
      />
      <div className="footer">
        <p>built by <a href="https://github.com/duncan-io">duncan-io</a></p>
      </div>
    </div>
  );
};

export default App;
