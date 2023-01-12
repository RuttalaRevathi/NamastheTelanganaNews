/* eslint-disable prettier/prettier */

import {
    GET_BATHUKAMMA,
    GET_BATHUKAMMA_SUCCESS,
    GET_BATHUKAMMA_ERROR,
  } from '../actions/getBathukammaAction';

  const initialState = {
    bathukammaData: [],
    bathukammaLoading: false,
    error: false,
  };

  function bathukammaReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BATHUKAMMA:
        return {...state, bathukammaLoading: true};
      case GET_BATHUKAMMA_SUCCESS:
        return {...state, bathukammaData: action.payload, bathukammaLoading: false};
              case GET_BATHUKAMMA_ERROR:
  return {...state, bathukammaLoading: true, error: true};
      default:
        return state;
    }
  }

  export default bathukammaReducer;
