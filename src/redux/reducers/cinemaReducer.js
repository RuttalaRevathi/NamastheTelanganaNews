/* eslint-disable prettier/prettier */

import {
    GET_CINEMA,
    GET_CINEMA_SUCCESS,
    GET_CINEMA_ERROR,
  } from '../actions/getCinemaAction';

  const initialState = {
    cinemaData: [],
    cinemaLoading: false,
    error: false,
  };

  function cinemaReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CINEMA:
        return {...state, cinemaLoading: true};
      case GET_CINEMA_SUCCESS:
        return {...state, cinemaData: action.payload, cinemaLoading: false};
              case GET_CINEMA_ERROR:
  return {...state, cinemaLoading: true, error: true};
      default:
        return state;
    }
  }

  export default cinemaReducer;
