import { get, post, del } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const MATCH_URL = `${URL}/matches`;
const SIGNUP_URL = `${AUTH_URL}/signup`;
const SIGNIN_URL = `${AUTH_URL}/signin`;

export const signUp = credentials => post(SIGNUP_URL, credentials);
export const signIn = credentials => post(SIGNIN_URL, credentials);

export const postMatch = data => post(MATCH_URL, data);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});