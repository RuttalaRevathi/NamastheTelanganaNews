/* eslint-disable prettier/prettier */

import {
    GET_INTERNATIONAL,
    GET_INTERNATIONAL_SUCCESS,
    GET_INTERNATIONAL_ERROR,
  } from '../actions/getInterNationalAction';

  const initialState = {
    interNationalData: [],
    interNationalLoading: false,
    error: false,
  };

  function interNationalReducer(state = initialState, action) {
    switch (action.type) {
      case GET_INTERNATIONAL:
        return {...state, interNationalLoading: true};
      case GET_INTERNATIONAL_SUCCESS:
        return {...state, interNationalData: action.payload, interNationalLoading: false};
              case GET_INTERNATIONAL_ERROR:
  return {...state, interNationalLoading: true, error: true};
      default:
        return state;
    }
  }

  export default interNationalReducer;
