/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Rasiphalalu} from '../../utilities/urls';

export const GET_RASIPHALALU_SUCCESS = 'GET_RASIPHALALU_SUCCESS';
export const GET_RASIPHALALU_ERROR = 'GET_RASIPHALALU_ERROR';
export const GET_RASIPHALALU = 'GET_RASIPHALALU';

 const getRasiPhalaluAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_RASIPHALALU,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Rasiphalalu, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_RASIPHALALU_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_RASIPHALALU_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getRasiPhalaluAction;
