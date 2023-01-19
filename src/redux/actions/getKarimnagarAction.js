/* eslint-disable prettier/prettier */
import {Adilabad, BaseUrl, CategoryUrl, Karimnagar} from '../../utilities/urls';

/* eslint-disable prettier/prettier */
export const GET_KARIMNAGAR_SUCCESS = 'GET_KARIMNAGAR_SUCCESS';
export const GET_KARIMNAGAR_ERROR = 'GET_KARIMNAGAR_ERROR';
export const GET_KARIMNAGAR = 'GET_KARIMNAGAR';

export const getKarimnagarAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_KARIMNAGAR,
      });
      const result = await fetch('https://www.ntnews.com/wp-json/ntnews/v1/category-api?cat_name=karimnagar', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      console.log(json,"result=================@@@@@@@@@@@@@@@@@@@@@@@@2 in karimnagar Action");
      if (json) {
        dispatch({
          type: GET_KARIMNAGAR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_KARIMNAGAR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
