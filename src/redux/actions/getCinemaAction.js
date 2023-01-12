/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Cinema} from '../../utilities/urls';

export const GET_CINEMA_SUCCESS = 'GET_CINEMA_SUCCESS';
export const GET_CINEMA_ERROR = 'GET_CINEMA_ERROR';
export const GET_CINEMA = 'GET_CINEMA';

 const getCinemaAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_CINEMA,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Cinema, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_CINEMA_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_CINEMA_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getCinemaAction;
