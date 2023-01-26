/* eslint-disable prettier/prettier */
import {
    GET_NALGONDA,
    GET_NALGONDA_SUCCESS,
    GET_NALGONDA_ERROR,
  } from '../actions/getNalgondaAction';



  const initialState = {
    nalgondaData: [],
    nalgondaLoading: false,
  };

  // adilabad
  function  nalgondaReducer(state = initialState, action) {
    switch (action.type) {
      case GET_NALGONDA:
        return { ...state, nalgondaLoading: false };
      case GET_NALGONDA_SUCCESS:
        return { ...state, nalgondaData: action.payload, nalgondaLoading: true };
      case GET_NALGONDA_ERROR:
        return { ...state, nalgondaLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (nalgondaReducer);

