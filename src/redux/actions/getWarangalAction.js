/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Warangal} from '../../utilities/urls';

export const GET_WARANGAL = 'GET_WARANGAL';
export const GET_WARANGAL_SUCCESS = 'GET_WARANGAL_SUCCESS';
export const GET_WARANGAL_ERROR = 'GET_WARANGAL_ERROR';

// warangal
export const getWarangalAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_WARANGAL,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Warangal, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_WARANGAL_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_WARANGAL_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
