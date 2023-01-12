/* eslint-disable prettier/prettier */

import {
    GET_EDITPAGE,
    GET_EDITPAGE_SUCCESS,
    GET_EDITPAGE_ERROR,
  } from '../actions/getEditPageAction';

  const initialState = {
    editPageData: [],
    editPageLoading: false,
    error: false,
  };

  function editPageReducer(state = initialState, action) {
    switch (action.type) {
      case GET_EDITPAGE:
        return {...state, editPageLoading: true};
      case GET_EDITPAGE_SUCCESS:
        return {...state, editPageData: action.payload, editPageLoading: false};
              case GET_EDITPAGE_ERROR:
  return {...state, editPageLoading: true, error: true};
      default:
        return state;
    }
  }

  export default editPageReducer;
