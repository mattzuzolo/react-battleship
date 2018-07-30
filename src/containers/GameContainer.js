import React, { Component } from 'react';

import Header from '../components/Header'
import PlayerContainer from './PlayerContainer'

const GameContainer = (props) => {
  return(
    <div className="game-container">
      <Header />
      <PlayerContainer id="opponent" />
    </div>
  )
}
export default GameContainer
