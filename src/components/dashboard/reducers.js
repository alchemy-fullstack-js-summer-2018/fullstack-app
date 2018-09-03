import { GAME_END } from '../game/reducers';

export const GAMES_LOAD = 'GAMES_LOAD';

export const getGames = state => state.games;

export function games(state = '', { type, payload }) {
  switch(type) {
    case GAMES_LOAD:
      return payload;
    case GAME_END:
      return '';
    default:
      return state;
  }
}