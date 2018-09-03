import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerDisplay from './PlayerDisplay';
import { connect } from 'react-redux';
import { getGames } from './reducers';
import { getUser } from '../auth/reducers';
import { requestGame } from './actions';

export class Dashboard extends Component {

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
        <PlayerDisplay profile={user.profile}/>
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
)(Dashboard);

export const UserGames = ({ onRequest, games }) => {
  return (
    <section>
      <button onClick={onRequest}>ENGAGE IN GORTS</button>
      <h1>{games}</h1>
    </section>
  );
};

UserGames.propTypes = {
  games: PropTypes.string,
  onRequest: PropTypes.func.isRequired
};