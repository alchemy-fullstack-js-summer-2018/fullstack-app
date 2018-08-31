import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGame, getMoves } from './reducers';
import { getUser } from '../app/reducers';
import { loadGame, unloadGame, loadMoves, move } from './actions';

class Game extends Component {
  static propTypes = {
    match: PropTypes.object,
    game: PropTypes.object,
    user: PropTypes.object,
    move: PropTypes.func.isRequired,
    moves: PropTypes.array.isRequired,
    loadMoves: PropTypes.func.isRequired,
    loadGame: PropTypes.func.isRequired,
    unloadGame: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { match, loadGame, loadMoves } = this.props;
    const { gameKey } = match.params;
    loadGame(gameKey);
    loadMoves(gameKey);
  }

  componentWillUnmount() {
    const { match, unloadGame } = this.props;
    unloadGame(match.params.gameKey);
  }

  render() {
    const { game, user, move, moves } = this.props;
    if(!game || !user) return null;

    const { uid } = user;
    const opponentId = Object.keys(game).filter(key => key !== uid)[0];

    const you = game[uid];
    const opponent = game[opponentId];

    return (
      <section>
        <h2>Players</h2>

        <div>
          <h3>You</h3>
          <p>Wins: {you.wins}</p>
          <p>Troops: {you.troops}</p>

          <h3>Opponent</h3>
          <p>Wins: {opponent.wins}</p>
          <p>Troops: {opponent.troops}</p>
        </div>

        <div>
          {moves.map(move => (
            <p
              key={move}
            >{move} has submitted</p>
          ))}
        </div>
        <p>
          {buildArray(you.troops).map(play => (
            <button
              key={play}
              onClick={() => move(play)}>{play}</button>
          ))}
        </p>
      </section>
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
 
export default connect(
  state => ({
    game: getGame(state),
    user: getUser(state),
    moves: getMoves(state)
  }),
  { loadGame, unloadGame, loadMoves, move }
)(Game);