import React, { Component } from 'react';
import UUID from 'uuid';

import GameTile from './GameTile'

class GameBoard extends Component {

  render(){
    return(
      <table className="game-board" id="all-tiles">
        <tbody className="table-body">
          <tr className="game-board table-body">
          {this.props.opponentBoard.map(gameTile =>
            <GameTile
              key={UUID()}
              gameTile={gameTile}
              clickHandler={this.props.clickHandler}/>
          )}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default GameBoard
