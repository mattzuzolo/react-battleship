import React, { Component } from 'react';

class GameTile extends Component {

  render(){
    // console.log("Game tile already attacked", this.props.alreadyAttacked)
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
  // console.log("determine class result", alreadyAttacked)
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


  //return alreadyAttacked ? "game-tile destroyed" : "game-tile not-destroyed";
}

export default GameTile;
