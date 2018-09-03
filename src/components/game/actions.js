import { GAME_LOAD, MOVE_LOAD, GAME_END, getGame } from './reducers';
import { getUser } from '../app/reducers';
import { gamesRef, movesRef } from '../../services/firebaseRef';
import { postMatch } from '../../services/api';

export const loadGame = gameKey => {
  return (dispatch, getState) => {
    gamesRef.child(gameKey).on('value', snapshot => {
      const game = snapshot.val();
      game.key = gameKey;
      if(game.winner) {
        const { profile: _id } = getUser(getState());
        console.log('ID', _id);
        dispatch({
          type: GAME_END,
          payload: game.winner === _id ? postMatch(game) : null
        });
      }
      else {
        dispatch({
          type: GAME_LOAD,
          payload: game
        });
      }
    });
  };
};

export const unloadGame = gameKey => {
  gamesRef.child(gameKey).off('value');
  return {
    type: GAME_END,
    payload: null
  };
};

export const loadMoves = gameKey => {
  return dispatch => {
    movesRef.child(gameKey).on('value', snapshot => {
      const moves = Object.keys(snapshot.val() || []);

      dispatch({
        type: MOVE_LOAD,
        payload: moves
      });
    });
  };
};

export const move = play => {
  return (dispatch, getState) => {
    const state = getState();
    const game = getGame(state);
    const user = getUser(state);
    movesRef.child(game.key).child(user.profile._id).set(play);
  };
};