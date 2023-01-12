/* eslint-disable prettier/prettier */

import {
    GET_HEALTH,
    GET_HEALTH_SUCCESS,
    GET_HEALTH_ERROR,
  } from '../actions/getHealthAction';

  const initialState = {
    healthData: [],
    healthLoading: false,
    error: false,
  };

  function healthReducer(state = initialState, action) {
    switch (action.type) {
      case GET_HEALTH:
        return {...state, healthLoading: true};
      case GET_HEALTH_SUCCESS:
        return {...state, healthData: action.payload, healthLoading: false};
              case GET_HEALTH_ERROR:
  return {...state, healthLoading: true, error: true};
      default:
        return state;
    }
  }

  export default healthReducer;
