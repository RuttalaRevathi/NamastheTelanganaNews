/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Cooking} from '../../utilities/urls';

export const GET_COOKING_SUCCESS = 'GET_COOKING_SUCCESS';
export const GET_COOKING_ERROR = 'GET_COOKING_ERROR';
export const GET_COOKING = 'GET_COOKING';

 const getCookingAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_COOKING,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Cooking, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_COOKING_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_COOKING_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getCookingAction;
