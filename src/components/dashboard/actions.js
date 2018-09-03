import {  ERROR, GAMES_LOAD, getUser } from './reducers';
import { playersRef, userGamesRef } from '../../services/firebaseRef';

export const requestGame = () => {
  return (dispatch, getState) => {
    const user = getUser(getState());
    const profileId = user.profile._id;
    playersRef.child(profileId)
      .set(true)
      .then(() => {
        userGamesRef.child(profileId).on('value', snapshot => {
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