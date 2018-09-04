import { get, post, del } from './request';

const URL = '/api';
const ALBUMS_URL = `${URL}/albums`;

export const getAlbums = () => get(ALBUMS_URL);
export const postAlbum = data => post(ALBUMS_URL, data);
export const getAlbum = id => get(`${ALBUMS_URL}/${id}`);
export const deleteAlbum = id => del(`${ALBUMS_URL}/${id}`);