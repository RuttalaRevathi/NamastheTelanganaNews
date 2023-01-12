/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Vaasthu} from '../../utilities/urls';

export const GET_VAASTHU_SUCCESS = 'GET_VAASTHU_SUCCESS';
export const GET_VAASTHU_ERROR = 'GET_VAASTHU_ERROR';
export const GET_VAASTHU = 'GET_VAASTHU';

 const getVaasthuAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_VAASTHU,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Vaasthu, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_VAASTHU_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_VAASTHU_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getVaasthuAction;
