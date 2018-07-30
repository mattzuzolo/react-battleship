import React from 'react';
import UUID from 'uuid';

import GameTile from './GameTile'

const GameBoard = (props) => {
  return(
    <table className="game-board" id="all-tiles">
      <tbody className="table-body">
        <tr className="game-board">
          {props.opponentBoard.map(gameTile =>
            <GameTile
              key={UUID()}
              gameTile={gameTile}
              alreadyAttacked={gameTile.alreadyAttacked}
              shipPresent={gameTile.shipPresent}
              clickHandler={props.clickHandler}
            />
        )}
        </tr>
      </tbody>
    </table>
  )
}

export default GameBoard
