import React from "react"

const EndGameModal = ({tempScore, bestScore, hiddenToggle}) => {

    const whatToShow = () => {

        if(tempScore < 15){
            return(
                <div className="modal">
                    <h3>Bummer! You Lost!</h3>
                    <h4>Your score was {tempScore}</h4>
                    <h4>Your best score so far is {bestScore}</h4>
                     <button onClick={hiddenToggle}>Play Again?</button>
                </div>
              
            ) 
          } else{
            return(
                <div className="modal">
                    <h3>Wow! You won!</h3>
                    <h4>Your score was {tempScore}</h4>
                    <h4>A perfect record</h4>
                     <button onClick={hiddenToggle}>Play Again?</button>
                </div>
            )
        }
        }
    


    return(
        <div>
            {whatToShow()}
        </div>
        
    )

}

export default EndGameModal