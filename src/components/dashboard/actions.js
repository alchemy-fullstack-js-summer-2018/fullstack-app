import {  ERROR, ERROR_CLEAR, GAMES_LOAD, getUser } from './reducers';
import { signUp } from '../../services/api.js';
import { playersRef, userGamesRef } from '../../services/firebaseRef';

export const requestGame = () => {
  return (dispatch, getState) => {
    const user = getUser(getState());
    playersRef.child(user.profile._id)
      .set(true)
      .then(() => {
        userGamesRef.child(user.profile._id).on('value', snapshot => {
          dispatch({
            type: GAMES_LOAD,
            payload: Object.keys(snapshot.val())[0]
          });
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err.message
        });
      });
  };
};