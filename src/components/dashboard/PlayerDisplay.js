import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PlayerDisplay extends PureComponent {
  state = { 
    editing: false
  };

  static propTypes = {
    profile: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired
  };

  render() { 
    const { stats, profile } = this.props;
    const { totalWins, totalGames } = stats;
    const { name, location, rank } = profile;

    return ( 
      <section>
        <h1>{name}</h1>
        <h3>Location: {location}</h3>
        <h3>Rank: {rank}</h3>
        <h3>Statistics:</h3>
        <ul>
          <li>Wins: {totalWins}</li>
          <li>Total Games: {totalGames}</li>
        </ul>
      </section>
    );
  }
}
 
export default PlayerDisplay;