/* eslint-disable prettier/prettier */

import { BaseUrl, Bathukamma, CategoryUrl} from '../../utilities/urls';

export const GET_BATHUKAMMA_SUCCESS = 'GET_BATHUKAMMA_SUCCESS';
export const GET_BATHUKAMMA_ERROR = 'GET_BATHUKAMMA_ERROR';
export const GET_BATHUKAMMA = 'GET_BATHUKAMMA';

 const getBathukammaAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_BATHUKAMMA,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Bathukamma, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_BATHUKAMMA_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_BATHUKAMMA_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getBathukammaAction;
