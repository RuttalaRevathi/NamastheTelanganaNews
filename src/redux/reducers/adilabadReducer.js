/* eslint-disable prettier/prettier */
import {
  GET_ADILABAD,
  GET_ADILABAD_SUCCESS,
  GET_ADILABAD_ERROR,
} from '../actions/getAdilabadAction';

const initialState = {
  adilabadData: [],
  adilabadLoading: false,
};

// adilabad
function adilabadReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADILABAD:
      return {...state, adilabadLoading: false};
    case GET_ADILABAD_SUCCESS:
      return {...state, adilabadData: action.payload, adilabadLoading: true};
    case GET_ADILABAD_ERROR:
      return {...state, adilabadLoading: false, error: true};
    default:
      return state;
  }
}
export default (adilabadReducer);
