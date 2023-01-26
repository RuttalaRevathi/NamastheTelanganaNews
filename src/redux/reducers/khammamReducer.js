/* eslint-disable prettier/prettier */
import {
    GET_KHAMMAM,
    GET_KHAMMAM_SUCCESS,
    GET_KHAMMAM_ERROR,
  } from '../actions/getKhammamAction';
  
  const initialState = {
    khammamData: [],
    khammamLoading: false,
  };
  
  // adilabad
  function khammamReducer(state = initialState, action) {
    switch (action.type) {
      case GET_KHAMMAM:
        return { ...state, khammamLoading: false };
      case GET_KHAMMAM_SUCCESS:
        return { ...state, khammamData: action.payload, khammamLoading: true };
      case GET_KHAMMAM_ERROR:
        return { ...state, khammamLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (khammamReducer);
  