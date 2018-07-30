import React from 'react';

const GameTile = (props) => {

  return(
      <th
        className={updateStrikeSuccess(props.alreadyAttacked, props.shipPresent)}
        onClick={(event) => props.clickHandler(props.gameTile, event)}>
        x
      </th>
  )
}

function updateStrikeSuccess(alreadyAttacked, shipPresent){
  if (shipPresent && alreadyAttacked){
    return "game-tile destroyed"
  }

  else if (shipPresent && !alreadyAttacked){
    return "game-tile not-destroyed"
  }

  else if (!shipPresent && alreadyAttacked){
    return "game-tile attacked-no-result"
  }

  else if (!shipPresent && !alreadyAttacked) {
    return "game-tile no-status"
  }
}

export default GameTile;
