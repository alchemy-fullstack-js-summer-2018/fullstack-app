import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired
  }

  render() { 
    const { player } = this.props;
    const { wins, troops } = player;

    return (
      <div>
        <h3>You</h3>
        <p>Wins: {wins}</p>
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