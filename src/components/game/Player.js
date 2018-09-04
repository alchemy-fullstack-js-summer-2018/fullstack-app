import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  

  static propTypes = {
    isYou: PropTypes.bool.isRequired,
    player: PropTypes.object.isRequired,
    selection: PropTypes.number,
    moves: PropTypes.bool
  };

  render() { 
    const { player, selection, moves } = this.props;
    const { wins, troops } = player;

    return (
      <div>
        <h3>{isYou ? 'You' : {player.name}</h3>
        <p>Wins: {wins}</p>
        {moves &&
          <h1>opponent has bid.</h1>
        }
        <h1>{selection}</h1>
        <p>Troops: {troops}{buildArray(troops).map((n, i) => <img key={i} src="https://i.imgur.com/iWo9fR6.png"/>)}</p>
        
      </div>
    );
  }
}
const buildArray = number => {
  let arr = [];
  for(let i = 0; i <= number; i++) {
    arr.push(i);
  }
  return arr;
};
export default Player;