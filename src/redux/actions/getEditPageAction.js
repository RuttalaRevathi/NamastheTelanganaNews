/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Editpage} from '../../utilities/urls';

export const GET_EDITPAGE_SUCCESS = 'GET_EDITPAGE_SUCCESS';
export const GET_EDITPAGE_ERROR = 'GET_EDITPAGE_ERROR';
export const GET_EDITPAGE = 'GET_EDITPAGE';

 const getEditPageAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_EDITPAGE,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Editpage, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_EDITPAGE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_EDITPAGE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getEditPageAction;
