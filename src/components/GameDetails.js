import React from 'react';

const GameDetails = (props) => {
  return(
    <div className="game-details">
      <h1>Game Details:</h1>
      <h3>Current score: {props.currentScore}</h3>
      <h3>Remaining ships: {props.shipsRemaining}</h3>
    </div>
  )
}

export default GameDetails;
