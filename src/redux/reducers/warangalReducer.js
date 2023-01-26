/* eslint-disable prettier/prettier */

import {
    GET_WARANGAL,
    GET_WARANGAL_SUCCESS,
    GET_WARANGAL_ERROR,
  } from '../actions/getWarangalAction';

  const initialState = {
    warangalData: [],
    warangalLoading: false,
  };

  // adilabad
  function warangalReducer(state = initialState, action) {
    switch (action.type) {
      case GET_WARANGAL:
        return { ...state, warangalLoading: false };
      case GET_WARANGAL_SUCCESS:
        return { ...state, warangalData: action.payload, warangalLoading: true };
      case GET_WARANGAL_ERROR:
        return { ...state, warangalLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (warangalReducer);

