import React, {useState} from "react";

const DisplayLogo = () => {
    const teams = {
        arizona:{
        teamName: "Arizona Cardinals",
        logo: "/images/arizona.png",
        id: "arizona",
        clicked: false
        },
        atlanta:{
        teamName: "Atlanta Falcons",
        logo: "/images/atlanta.png",
        id: "atlanta",
        clicked: false
        },
        baltimore:{
        teamName: "Baltimore Ravens",
        logo: "/images/baltimore.png",
        id: "baltimore",
        clicked: false
        },
        buffalo:{
        teamName: "Buffalo Bills",
        logo: "/images/buffalo.jpg",
        id: "buffalo",
        clicked: false
        },
        carolina:{
        teamName: "Carolina Panthers",
        logo: "/images/carolina.jpg",
        id: "carolina",
        clicked: false
    },
    chicago:{
        teamName: "Chicago Bears",
        logo: "/images/chicago.jpg",
        id: "chicago",
        clicked: false
    },
    cincinnati: {
        teamName: "Cincinnati Bengals",
        logo: "/images/cincinnati.jpeg",
        id: "cincinnati",
        clicked: false
    },
    cleveland:{
        teamName: "Cleveland Browns",
        logo: "/images/browns.jpg",
        id: "cleveland",
        clicked: false
    },
    dallas:{
        teamName: "Dallas Cowboys",
        logo: "/images/dallas.jpg",
        id: "dallas",
        clicked: false
    },
    denver:{
        teamName: "Denver Broncos",
        logo: "/images/denver.png",
        id: "denver",
        clicked: false
    },
    detroit:{
        teamName: "Detroit Lions",
        logo: "/images/detroit.jpg",
        id: "detroit",
        clicked: false
    },
    greenbay: {
        teamName: "Green Bay Packers",
        logo: "/images/greenbay.png",
        id: "greenbay",
        clicked: false
    },
    houston: {
        teamName: "Houston Texans",
        logo: "/images/texans.png",
        id: "houston",
        clicked: false
    },
    indianapolis:{
        teamName: "Indianapolis Colts",
        logo: "/images/colts.png",
        id: "indianapolis",
        clicked: false
    },
    jacksonville:{
        teamName: "Jacksonville Jaguars",
        logo: "/images/jacksonville.png",
        id: "jacksonville",
        clicked: false
    },};

    const [clicked, setClicked] = useState(teams)

    const clickHandler = (team) => {

        console.log(clicked.team)
        // if (teamClicked === false){
        //   teamClicked = true  
        // } else{
        //     console.log("You Lose!")
        // }
    }

    return(
        <div className="teamDisplayArea">
        {Object.entries(teams).forEach(team =>{
            return(
                <div key={team.id} onClick={() => clickHandler(team)} className="teamCard">
                    <img className="teamImage" src={team.logo} alt={team.teamName} />
                    <p>{team.teamName}</p>

                </div>
            )
        })}
        </div>
    

    )
}

export default DisplayLogo