/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Zindagi} from '../../utilities/urls';

export const GET_ZINDAGI_SUCCESS = 'GET_ZINDAGI_SUCCESS';
export const GET_ZINDAGI_ERROR = 'GET_ZINDAGI_ERROR';
export const GET_ZINDAGI = 'GET_ZINDAGI';

 const getZindagiAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_ZINDAGI,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Zindagi, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_ZINDAGI_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_ZINDAGI_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getZindagiAction;
