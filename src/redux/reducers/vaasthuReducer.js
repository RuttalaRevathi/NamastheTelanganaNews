/* eslint-disable prettier/prettier */

import {
    GET_VAASTHU,
    GET_VAASTHU_SUCCESS,
    GET_VAASTHU_ERROR,
  } from '../actions/getVaasthuAction';

  const initialState = {
    vaasthuData: [],
    vasthuLoading: false,
    error: false,
  };

  function vaasthuReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VAASTHU:
        return {...state, vasthuLoading: true};
      case GET_VAASTHU_SUCCESS:
        return {...state, vaasthuData: action.payload, vasthuLoading: false};
              case GET_VAASTHU_ERROR:
  return {...state, vasthuLoading: true, error: true};
      default:
        return state;
    }
  }

  export default vaasthuReducer;
