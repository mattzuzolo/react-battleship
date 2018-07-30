import React, { Component } from 'react';

class GameTile extends Component {

  render(){
    // console.log("Game tile already attacked", this.props.alreadyAttacked)
    return(
        <th
          className={determineClass(this.props.alreadyAttacked)}
          onClick={(event) => this.props.clickHandler(this.props.gameTile, event)}>
          x
        </th>
    )
  }

}

function determineClass(alreadyAttacked){
  // console.log("determine class result", alreadyAttacked)
  return alreadyAttacked ? "game-tile destroyed" : "game-tile not-destroyed";
}

export default GameTile;
