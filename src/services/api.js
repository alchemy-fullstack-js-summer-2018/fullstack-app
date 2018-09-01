import { get, post, del } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SIGNUP_URL = `${AUTH_URL}/signup`;
const SIGNIN_URL = `${AUTH_URL}/signin`;

export const signUp = data => post(SIGNUP_URL, data);
export const signIn = data => post(SIGNIN_URL, data);