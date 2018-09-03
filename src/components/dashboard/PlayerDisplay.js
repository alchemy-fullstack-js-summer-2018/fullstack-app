import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PlayerDisplay extends PureComponent {
  state = { 
    editing: false
  };

  static propTypes = {
    profile: PropTypes.object.isRequired,
    wins: PropTypes.number,
    losses: PropTypes.number
  };

  render() { 
    const { wins = 0, losses = 0, profile } = this.props;
    const { name, location, rank } = profile;

    return ( 
      <section>
        <h1>{name}</h1>
        <h3>Location: {location}</h3>
        <h3>Rank: {rank}</h3>
        <h3>Statistics:</h3>
        <ul>
          <li>Wins: {wins}</li>
          <li>Losses: {losses}</li>
        </ul>
      </section>
    );
  }
}
 
export default PlayerDisplay;