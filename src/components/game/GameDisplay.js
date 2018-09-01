import React, { Component } from 'react';
import Player from './Player.js';
import PropTypes from 'prop-types';
import styles from './GameDisplay.css';

class GameDisplay extends Component {
  static propTypes = {
    you: PropTypes.object.isRequired,
    opponent: PropTypes.object.isRequired,
    moves: PropTypes.array
  };

  render() { 
    const { you, opponent, moves } = this.props;

    return (
      <div className={styles.gameDisplay}>
        <Player player={you}/>
        <Player player={opponent}/>
      </div>
    );
  }
}
 
export default GameDisplay;