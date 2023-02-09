
import './App.css';
import React, { useState } from 'react';
import DisplayLogo from './Components/DisplayLogos';

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [beenClicked, setBeenClicked] = useState({
    arizona: false,
    atlanta: false,
    baltimore: false,
    buffalo: false,
    carolina: false,
    chicago: false,
    cincinnati: false,
    cleveland: false,
    dallas: false,
    denver: false,
    detroit: false,
    greenbay: false,
    houston: false,
    indianapolis: false,
    jacksonville: false,
    kansascity: false,
    lasvegas: false,
    LAC: false,
    LAR: false,
    miami: false,
    minnesota: false,
    newengland: false,
    neworleans: false,
    NYG: false,
    NYJ: false,
    philadelphia: false,
    pittsburgh: false,
    sanfrancisco: false,
    seattle: false,
    tampabay: false,
    tennessee: false,
    washington: false,
  })

  return (
    <div className="App">
      <h1>NFL Memory Game!</h1>
      <h3>Click every logo without clicking any twice</h3>
      <DisplayLogo/>
    </div>
  );
}

export default App;
