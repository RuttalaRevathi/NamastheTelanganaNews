/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Nizamabad} from '../../utilities/urls';

export const GET_NIZAMABAD = 'GET_NIZAMABAD';
export const GET_NIZAMABAD_SUCCESS = 'GET_NIZAMABAD_SUCCESS';
export const GET_NIZAMABAD_ERROR = 'GET_NIZAMABAD_ERROR';
export const getNizamabadAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_NIZAMABAD,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Nizamabad, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_NIZAMABAD_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_NIZAMABAD_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
