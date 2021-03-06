import React, { Component } from 'react';

import Header from '../components/Header'
import PlayerContainer from './PlayerContainer'

//Starting boards. Replace in initial state. Note: gamePackage is an object.
import starterBoard from "../starterBoard"
import starterBoardTwo from "../starterBoardTwo"
import gamePackage from "../dynamicBoard"

class GameContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      opponentBoard: gamePackage.dynamicBoard,
      currentScore: 0,
      shipsRemaining: gamePackage.shipCount
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

  render(){
    console.log("See solution here: ", this.state.opponentBoard)
      if (this.state.shipsRemaining === 0){
        return(
        <div>
          <h1>Game over</h1>
          <h3>Refresh to the page to play again.</h3>
        </div>)
      }
      return(
      <div className="game-container">
        <Header />
        <PlayerContainer className="player-boards" id="opponent"
          opponentBoard={this.state.opponentBoard}
          currentScore={this.state.currentScore}
          shipsRemaining={this.state.shipsRemaining}
          clickHandler={this.clickHandler}
        />
      </div>
    )
  }
}

export default GameContainer
