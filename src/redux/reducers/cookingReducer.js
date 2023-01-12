/* eslint-disable prettier/prettier */

import {
    GET_COOKING,
    GET_COOKING_SUCCESS,
    GET_COOKING_ERROR,
  } from '../actions/getCookingAction';

  const initialState = {
    cookingData: [],
    cookingLoading: false,
    error: false,
  };

  function cookingReducer(state = initialState, action) {
    switch (action.type) {
      case GET_COOKING:
        return {...state, cookingLoading: true};
      case GET_COOKING_SUCCESS:
        return {...state, cookingData: action.payload, cookingLoading: false};
              case GET_COOKING_ERROR:
  return {...state, cookingLoading: true, error: true};
      default:
        return state;
    }
  }

  export default cookingReducer;
