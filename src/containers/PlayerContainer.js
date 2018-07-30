import React, { Component } from 'react';

import GameBoard from '../components/GameBoard'
import GameDetails from '../components/GameDetails'

//Starting boards. Replace in initial state. Note: gamePackage is an object.
import starterBoard from "../starterBoard"
import gamePackage from "../dynamicBoard"

class PlayerContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      opponentBoard: starterBoard,
      currentScore: 0,
      shipsRemaining: 3
    }
  }

  updateStateElement = (gameTile, tar) => {
    //find a more react-y way to do this. Better than cloning or copying with spread operator.
    let currentBoard = this.state.opponentBoard;
    let clonedBoard = currentBoard;
    let foundMatchIndex = currentBoard.findIndex((boardInstance) => (
      boardInstance.id === gameTile.id
    ));
    clonedBoard[foundMatchIndex].alreadyAttacked = true;
    this.setState({ opponentBoard:clonedBoard })
  }

  clickHandler = (gameTile, event) => {
    let currentScore = this.state.currentScore;
    let shipsRemaining = this.state.shipsRemaining;

    if (gameTile.shipPresent && gameTile.alreadyAttacked === false){
      this.updateStateElement(gameTile, event.target);
      currentScore++;
      shipsRemaining--;
      this.setState({currentScore});
      this.setState({shipsRemaining});
    }

    else if (gameTile.alreadyAttacked) {
      alert("You've already attacked this tile")
    }

    else if (gameTile.shipPresent === false){
      this.updateStateElement(gameTile, event.target);
    }

    else{
      alert("The game is broken if this alert displays.")
    }
  }


  //state stuff (and other functionality in GameContainer) should really live in this componenet. Will refactor later. That's why not funcional component.
  render(){
    if (this.state.shipsRemaining === 0){
      return(
      <div>
        <h1>Game over</h1>
        <h3>Refresh to the page to play again.</h3>
      </div>)
    }
    return(
    <div className="player-container">
      <GameBoard
        clickHandler={this.clickHandler}
        opponentBoard={this.state.opponentBoard}
      />
      <GameDetails
        currentScore={this.state.currentScore}
        shipsRemaining={this.state.shipsRemaining}
      />
    </div>
  )}
}

export default PlayerContainer;
