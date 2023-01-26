/* eslint-disable prettier/prettier */
import {
    GET_MAHABUBNAGAR,
    GET_MAHABUBNAGAR_SUCCESS,
    GET_MAHABUBNAGAR_ERROR,
  } from '../actions/getMahabubnagarAction';
  
  const initialState = {
    mahabubnagarData: [],
    mahabubnagarLoading: false,
  };
  
  // adilabad
  function  mahabubnagarReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MAHABUBNAGAR:
        return { ...state, mahabubnagarLoading: false };
      case GET_MAHABUBNAGAR_SUCCESS:
        return { ...state, mahabubnagarData: action.payload, mahabubnagarLoading: true };
      case GET_MAHABUBNAGAR_ERROR:
        return { ...state, mahabubnagarLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (mahabubnagarReducer);
  