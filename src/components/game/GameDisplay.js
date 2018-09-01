import React, { Component } from 'react';
import Player from './Player.js';
import PropTypes from 'prop-types';
import styles from './GameDisplay.css';

class GameDisplay extends Component {
  static propTypes = {
    you: PropTypes.object.isRequired,
    opponent: PropTypes.object.isRequired,
    moves: PropTypes.boolean,
    selection: PropTypes.number
  };

  render() { 
    const { you, opponent, moves, selection } = this.props;

    return (
      <div className={styles.gameDisplay}>
        <Player player={you} selection={selection}/>
        <Player player={opponent} moves={moves}/>
      </div>
    );
  }
}
 
export default GameDisplay;