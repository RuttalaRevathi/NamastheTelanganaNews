/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Rangareddy} from '../../utilities/urls';

export const GET_RANGAREDDY = 'GET_RANGAREDDY';
export const GET_RANGAREDDY_SUCCESS = 'GET_RANGAREDDY_SUCCESS';
export const GET_RANGAREDDY_ERROR = 'GET_RANGAREDDY_ERROR';
// Rangareddy
export const getRangareddyAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_RANGAREDDY,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Rangareddy, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_RANGAREDDY_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_RANGAREDDY_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
