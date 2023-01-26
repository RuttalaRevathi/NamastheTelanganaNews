/* eslint-disable prettier/prettier */
import {
    GET_RANGAREDDY,
    GET_RANGAREDDY_SUCCESS,
    GET_RANGAREDDY_ERROR,
  } from '../actions/getRangareddyAction';

  const initialState = {
    rangareddyData: [],
    rangareddyLoading: false,
  };

  // adilabad
  function rangareddyReducer(state = initialState, action) {
    switch (action.type) {
      case GET_RANGAREDDY:
        return { ...state, rangareddyLoading: false };
      case GET_RANGAREDDY_SUCCESS:
        return { ...state, rangareddyData: action.payload, rangareddyLoading: true };
      case GET_RANGAREDDY_ERROR:
        return { ...state, rangareddyLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (rangareddyReducer);

