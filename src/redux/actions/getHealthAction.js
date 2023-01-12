/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Health} from '../../utilities/urls';

export const GET_HEALTH_SUCCESS = 'GET_HEALTH_SUCCESS';
export const GET_HEALTH_ERROR = 'GET_HEALTH_ERROR';
export const GET_HEALTH = 'GET_HEALTH';

 const getHealthAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_HEALTH,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Health, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_HEALTH_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_HEALTH_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getHealthAction;
