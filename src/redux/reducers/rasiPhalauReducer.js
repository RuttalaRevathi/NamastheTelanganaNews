/* eslint-disable prettier/prettier */

import {
    GET_RASIPHALALU,
    GET_RASIPHALALU_SUCCESS,
    GET_RASIPHALALU_ERROR,
  } from '../actions/getRasiPhalaluAction';

  const initialState = {
    rasiPhalaluData: [],
    rasiPhalaluLoading: false,
    error: false,
  };

  function rasiPhalauReducer(state = initialState, action) {
    switch (action.type) {
      case GET_RASIPHALALU:
        return {...state, rasiPhalaluLoading: true};
      case GET_RASIPHALALU_SUCCESS:
        return {...state, rasiPhalaluData: action.payload, rasiPhalaluLoading: false};
              case GET_RASIPHALALU_ERROR:
  return {...state, rasiPhalaluLoading: true, error: true};
      default:
        return state;
    }
  }

  export default rasiPhalauReducer;
