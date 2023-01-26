/* eslint-disable prettier/prettier */
import {
    GET_KARIMNAGAR,
    GET_KARIMNAGAR_SUCCESS,
    GET_KARIMNAGAR_ERROR,
  } from '../actions/getKarimnagarAction';
  
  const initialState = {
    karimnagarData: [],
    karimnagarLoading: false,
  };
  
  // adilabad
  function karimnagarReducer(state = initialState, action) {
    switch (action.type) {
      case GET_KARIMNAGAR:
        return {...state, karimnagarLoading: false};
      case GET_KARIMNAGAR_SUCCESS:
        return {...state, karimnagarData: action.payload, karimnagarLoading: true};
      case GET_KARIMNAGAR_ERROR:
        return {...state, karimnagarLoading: false, error: true};
      default:
        return state;
    }
  }
  export default (karimnagarReducer);
  