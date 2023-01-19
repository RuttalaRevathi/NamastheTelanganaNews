/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Khammam} from '../../utilities/urls';

export const GET_KHAMMAM = 'GET_KHAMMAM';
export const GET_KHAMMAM_SUCCESS = 'GET_KHAMMAM_SUCCESS';
export const GET_KHAMMAM_ERROR = 'GET_KHAMMAM_ERROR';

export const getKhammamAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_KHAMMAM,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Khammam, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      console.log(result,"result=================Khammammmmmmmmmmmmm");
      if (json) {
        dispatch({
          type: GET_KHAMMAM_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_KHAMMAM_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
