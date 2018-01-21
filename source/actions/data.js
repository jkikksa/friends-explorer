import {FETCH_DATA, FETCH_ERROR} from '../constants/action-types';
const DATA_URL = '/data/friends.json';

export const getFriends = () => {
  return (dispatch) => {
    return fetch(DATA_URL)
        .then((response) => {
          return response.json();
        })
        .then((persons) => {
          return dispatch({
            type: FETCH_DATA,
            persons
          });
        })
        .catch(() => {
          return dispatch({
            type: FETCH_ERROR
          });
        });
  };
};
