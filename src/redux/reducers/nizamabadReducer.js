/* eslint-disable prettier/prettier */
import {
    GET_NIZAMABAD,
    GET_NIZAMABAD_SUCCESS,
    GET_NIZAMABAD_ERROR,
  } from '../actions/getNizamabadAction';

  const initialState = {
    nizamabadData: [],
    nizamabadLoading: false,
  };

  // adilabad
  function  nizamabadReducer(state = initialState, action) {
    switch (action.type) {
      case GET_NIZAMABAD:
        return { ...state, nizamabadLoading: false };
      case GET_NIZAMABAD_SUCCESS:
        return { ...state, nizamabadData: action.payload, nizamabadLoading: true };
      case GET_NIZAMABAD_ERROR:
        return { ...state, nizamabadLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (nizamabadReducer);

