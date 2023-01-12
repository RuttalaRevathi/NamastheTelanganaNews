/* eslint-disable prettier/prettier */

import { Agriculture, BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_AGRICULTURE_SUCCESS = 'GET_AGRICULTURE_SUCCESS';
export const GET_AGRICULTURE_ERROR = 'GET_AGRICULTURE_ERROR';
export const GET_AGRICULTURE = 'GET_AGRICULTURE';

 const getAgricultureAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_AGRICULTURE,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Agriculture, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_AGRICULTURE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_AGRICULTURE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getAgricultureAction;
