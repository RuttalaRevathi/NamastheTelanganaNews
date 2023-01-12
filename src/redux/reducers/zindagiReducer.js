/* eslint-disable prettier/prettier */

import {
    GET_ZINDAGI,
    GET_ZINDAGI_SUCCESS,
    GET_ZINDAGI_ERROR,
  } from '../actions/getZindagiAction';

  const initialState = {
    zindagiData: [],
    zindagiLoading: false,
    error: false,
  };

  function zindagiReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ZINDAGI:
        return {...state, zindagiLoading: true};
      case GET_ZINDAGI_SUCCESS:
        return {...state, zindagiData: action.payload, zindagiLoading: false};
              case GET_ZINDAGI_ERROR:
  return {...state, zindagiLoading: true, error: true};
      default:
        return state;
    }
  }

  export default zindagiReducer;
