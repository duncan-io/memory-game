import React, { useEffect, useState, useRef } from "react";

const DisplayLogo = ({increaseScore, logBestScore, hiddenToggle}) => {

  const logos = [
    {
      teamName: "Arizona Cardinals",
      logo: "./images/arizona.png",
      id: "arizona",
      clicked: false,
      order: 0
    },
    {
      teamName: "Atlanta Falcons",
      logo: "./images/atlanta.png",
      id: "atlanta",
      clicked: false,
      order: 1
    },
    {
      teamName: "Baltimore Ravens",
      logo: "./images/baltimore.png",
      id: "baltimore",
      clicked: false,
      order: 2
    },
    {
      teamName: "Buffalo Bills",
      logo: "./images/buffalo.jpg",
      id: "buffalo",
      clicked: false,
      order: 3
    },
    {
      teamName: "Carolina Panthers",
      logo: "./images/carolina.jpg",
      id: "carolina",
      clicked: false,
      order: 4
    },
    {
      teamName: "Chicago Bears",
      logo: "./images/chicago.jpg",
      id: "chicago",
      clicked: false,
      order: 5
    },
    {
      teamName: "Cincinnati Bengals",
      logo: "./images/cincinnati.jpeg",
      id: "cincinnati",
      clicked: false,
      order: 6
    },
    {
      teamName: "Cleveland Browns",
      logo: "./images/browns.jpg",
      id: "cleveland",
      clicked: false,
      order: 7
    },
    {
      teamName: "Dallas Cowboys",
      logo: "./images/dallas.jpg",
      id: "dallas",
      clicked: false,
      order: 8
    },
    {
      teamName: "Denver Broncos",
      logo: "./images/denver.png",
      id: "denver",
      clicked: false,
      order: 9
    },
    {
      teamName: "Detroit Lions",
      logo: "./images/detroit.jpg",
      id: "detroit",
      clicked: false,
      order: 10
    },
    {
      teamName: "Green Bay Packers",
      logo: "./images/greenbay.png",
      id: "greenbay",
      clicked: false,
      order: 11
    },
    {
      teamName: "Houston Texans",
      logo: "./images/texans.png",
      id: "houston",
      clicked: false,
      order: 12
    },
    {
      teamName: "Indianapolis Colts",
      logo: "./images/colts.png",
      id: "indianapolis",
      clicked: false,
      order: 13
    },
    {
      teamName: "Jacksonville Jaguars",
      logo: "./images/jacksonville.png",
      id: "jacksonville",
      clicked: false,
      order: 14
    },
  ]
   
  const teams = useRef(logos);

  const [clicked, setClicked] = useState(logos);

  const shuffle = () =>{
    const reordered = logos
    reordered.forEach(team => {
        team.order = Math.floor(Math.random()*100)
    })

    reordered.sort((a, b) => a.order - b.order);

    return(reordered)

  }

  const clickHandler = (team) => {
    let teamState = clicked.find((item) => item.id === team);
    if (teamState.clicked === false) {
        increaseScore();
      const next = clicked.map((teamToAdd) => {
    
        if (teamToAdd.id !== team) {
          return teamToAdd;
        } else {
          return {
            ...teamToAdd,
            clicked: true,
          };
        }
        
      });
      setClicked(next);
    } else {
        hiddenToggle()
        logBestScore()
        setClicked(logos)

    }

  };

  useEffect(() => {
    console.log("Use effect run")
    teams.current = shuffle();
})


  return (
    <div className="teamDisplayArea">
      { teams.current.map((team) => (
        <div
          key={team.id}
          onClick={() => clickHandler(team.id)}
          className="teamCard"
        >
          <img className="teamImage" src={team.logo} alt={team.teamName} />
          <p>{team.teamName}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayLogo;
