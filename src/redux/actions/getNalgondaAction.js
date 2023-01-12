/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Nalgonda} from '../../utilities/urls';

export const GET_NALGONDA = 'GET_NALGONDA';
export const GET_NALGONDA_SUCCESS = 'GET_NALGONDA_SUCCESS';
export const GET_NALGONDA_ERROR = 'GET_NALGONDA_ERROR';
export const getNalgondaAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_NALGONDA,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Nalgonda, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_NALGONDA_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_NALGONDA_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
