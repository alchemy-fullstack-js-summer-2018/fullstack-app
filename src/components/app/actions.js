import {  ERROR, ERROR_CLEAR, USER_LOAD, GAMES_LOAD, USER_SIGNUP, getUser } from './reducers';
import { auth } from '../../services/firebase';
import { signUp } from '../../services/api.js';
import { playersRef, userGamesRef } from '../../services/firebaseRef';

export const clearError = () => ({ type: ERROR_CLEAR });

export const userSignUp = data => ({
  type: USER_SIGNUP,
  payload: signUp(data)
});

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


// export const login = () => {
//   return dispatch => {
//     auth.onAuthStateChanged(user => {
//       if(user) {
//         dispatch({
//           type: USER_LOAD,
//           payload: user
//         });
// 
// export const loadGames = user => {
//   return dispatch => {


//       } else {
//         auth.signInAnonymously()
//           .catch(err => {
//             dispatch({
//               type: ERROR,
//               payload: err.message
//             });
//           });
//       }
//     });
//   };
// };

