import "./App.css";
import React, { useState, useRef } from "react";
import DisplayLogo from "./Components/DisplayLogos";
import EndGameModal from "./Components/EndGameModal";

const App = () => {
  const [score, setScore] = useState(0);
  const [tempScore, setTempScore] = useState(0)
  const [bestScore, setBestScore] = useState(0);
  const [hidden, setHidden] = useState("background hidden")

  const increaseScore = () => {
    setScore(score + 1);
  };

  const logBestScore = () => {
    if (bestScore < score){
      setBestScore(score);
      setTempScore(score)
      setScore(0)
    } else{
      setTempScore(score)
      setScore(0)
    }
    ;
  };

  const hiddenToggle = () =>{
    if(hidden === "background hidden"){
      setHidden("background")
    } else{
      setHidden("background hidden")
    }
  }

  return (
    <div className="App">
      <div className={hidden}>
        <EndGameModal tempScore={tempScore} bestScore = {bestScore} hiddenToggle = {hiddenToggle}/>
      </div>
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
        hiddenToggle = {hiddenToggle}
      />
      <div className="footer">
        <p>built by <a href="https://github.com/duncan-io">duncan-io</a></p>
      </div>
    </div>
  );
};

export default App;
