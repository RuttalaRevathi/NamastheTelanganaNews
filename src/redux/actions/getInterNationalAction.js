/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, International} from '../../utilities/urls';

export const GET_INTERNATIONAL_SUCCESS = 'GET_INTERNATIONAL_SUCCESS';
export const GET_INTERNATIONAL_ERROR = 'GET_INTERNATIONAL_ERROR';
export const GET_INTERNATIONAL = 'GET_INTERNATIONAL';

 const getInterNationalAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_INTERNATIONAL,
        });
        const result = await fetch(BaseUrl + CategoryUrl + International, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_INTERNATIONAL_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_INTERNATIONAL_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getInterNationalAction;
