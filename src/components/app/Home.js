import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, getGames } from './reducers';
import { requestGame } from './actions';

export class Home extends Component {

  static propTypes = {
    user: PropTypes.object,
    games: PropTypes.string,
    requestGame: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidUpdate() {
    const { games, history } = this.props;
    if(!games) return;
    history.push({
      pathname: `/games/${games}`
    });
  }

  render() { 
    const { user, games, requestGame } = this.props;

    return (
      <div>
        <h2>EXPERIENCE GORTS MORTAL</h2>
        {user && <UserGames games={games} onRequest={requestGame}/>}
      </div>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
    games: getGames(state)
  }),
  { requestGame }
)(Home);

export const UserGames = ({ onRequest, games }) => {
  return (
    <section>
      <button onClick={onRequest}>ENGAGE IN GORTS</button>
      <h1>{games}</h1>
    </section>
  );
};

UserGames.propTypes = {
  games: PropTypes.string.isRequired,
  onRequest: PropTypes.func.isRequired
};