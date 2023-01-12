/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Karimnagar} from '../../utilities/urls';

/* eslint-disable prettier/prettier */
export const GET_KARIMNAGAR_SUCCESS = 'GET_KARIMNAGAR_SUCCESS';
export const GET_KARIMNAGAR_ERROR = 'GET_KARIMNAGAR_ERROR';
export const GET_KARIMNAGAR = 'GET_KARIMNAGAR';

export const getKarimnagarAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_KARIMNAGAR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Karimnagar, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_KARIMNAGAR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_KARIMNAGAR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
