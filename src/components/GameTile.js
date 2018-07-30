import React, { Component } from 'react';

class GameTile extends Component {
  render(){
    return(
        <th
          className={updateStrikeSuccess(this.props.alreadyAttacked, this.props.shipPresent)}
          onClick={(event) => this.props.clickHandler(this.props.gameTile, event)}>
          x
        </th>
    )
  }
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
