
import './App.css';
import React, { useState } from 'react';
import DisplayLogo from './Components/DisplayLogos';

const App = () => {

  

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
 
  const increaseScore = () => {
    setScore(score + 1)
  }

  const logBestScore = () =>{
    setBestScore(score);
    setScore(0)
  }
  
  return (
    <div className="App">
      <h1>NFL Memory Game!</h1>
      <h3>Click every logo without clicking any twice</h3>
      <h4>Your score: <strong>{score}</strong>/15</h4>
      <h4>Best Score Achieved: <strong>{bestScore}</strong></h4>
      <DisplayLogo increaseScore={()=>increaseScore()} logBestScore={() => logBestScore()}/>
    </div>
  );
}

export default App;
