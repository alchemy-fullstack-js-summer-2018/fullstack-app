import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLeaders } from '../dashboard/reducers';

class LeaderboardDisplay extends Component {
  static propTypes = {
    leaders: PropTypes.array.isRequired
  };

  render() { 
    const { leaders } = this.props;

    return (
      <div>
        <h2>Top 5 Most Successful Generals</h2>
        <p>{leaders[0].name}: {leaders[0].wins}</p>
        <p>{leaders[1].name}: {leaders[1].wins}</p>
        <p>{leaders[2].name}: {leaders[2].wins}</p>
        <p>{leaders[3].name}: {leaders[3].wins}</p>
        <p>{leaders[4].name}: {leaders[4].wins}</p>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    leaders: getLeaders(state)
  }, null)
)(LeaderboardDisplay);