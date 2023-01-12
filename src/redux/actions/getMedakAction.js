/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Medak} from '../../utilities/urls';

export const GET_MEDAK = 'GET_MEDAK';
export const GET_MEDAK_SUCCESS = 'GET_MEDAK_SUCCESS';
export const GET_MEDAK_ERROR = 'GET_MEDAK_ERROR';

export const getMedakAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_MEDAK,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Medak, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_MEDAK_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_MEDAK_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
