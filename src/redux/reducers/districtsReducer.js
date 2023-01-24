/* eslint-disable prettier/prettier */
import {
  GET_ADILABAD,
  GET_ADILABAD_SUCCESS,
  GET_ADILABAD_ERROR,
} from '../actions/getAdilabadAction';

import {
  GET_KARIMNAGAR,
  GET_KARIMNAGAR_SUCCESS,
  GET_KARIMNAGAR_ERROR,
} from '../actions/getKarimnagarAction';

import {
  GET_KHAMMAM,
  GET_KHAMMAM_SUCCESS,
  GET_KHAMMAM_ERROR,
} from '../actions/getKhammamAction';

import {
  GET_MAHABUBNAGAR,
  GET_MAHABUBNAGAR_SUCCESS,
  GET_MAHABUBNAGAR_ERROR,
} from '../actions/getMahabubnagarAction';

import {
  GET_MEDAK,
  GET_MEDAK_SUCCESS,
  GET_MEDAK_ERROR,
} from '../actions/getMedakAction';

import {
  GET_NALGONDA,
  GET_NALGONDA_SUCCESS,
  GET_NALGONDA_ERROR,
} from '../actions/getNalgondaAction';

import {
  GET_NIZAMABAD,
  GET_NIZAMABAD_SUCCESS,
  GET_NIZAMABAD_ERROR,
} from '../actions/getNizamabadAction';

import {
  GET_RANGAREDDY,
  GET_RANGAREDDY_SUCCESS,
  GET_RANGAREDDY_ERROR,
} from '../actions/getRangareddyAction';

import {
  GET_WARANGAL,
  GET_WARANGAL_SUCCESS,
  GET_WARANGAL_ERROR,
} from '../actions/getWarangalAction';


const initialState = {
  adilabadData: [],
  adilabadLoading: false,
  karimnagarData: [],
  karimnagarLoading: false,
  khammamData: [],
  khammamLoading: false,
  mahabubnagarData: [],
  mahabubnagarLoading: false,
  medakData: [],
  medakLoading: false,
  nalgondaData: [],
  nalgondaLoading: false,
  nizamabadData: [],
  nizamabadLoading: false,
  rangareddyData: [],
  rangareddyLoading: false,
  warangalData: [],
  warangalLoading: false,
};

// adilabad
function adilabadReducer(state = initialState, action) {

  switch (action.type) {
    case GET_ADILABAD:
      return { ...state, adilabadLoading: false };
    case GET_ADILABAD_SUCCESS:
      return { ...state, adilabadData: action.payload, adilabadLoading: true };
    case GET_ADILABAD_ERROR:
      return { ...state, adilabadLoading: false, error: true };
    default:
      return state;
  }
}
// karimnagar
function karimnagarReducer(state = initialState, action) {
  switch (action.type) {
    case GET_KARIMNAGAR:
      return { ...state, karimnagarLoading: false };
    case GET_KARIMNAGAR_SUCCESS:
      console.log(...state.karimnagarData,"karimnagar data in districts reducer");
      return { ...state, karimnagarData: action.payload, karimnagarLoading: true };

    case GET_KARIMNAGAR_ERROR:
      return { ...state, karimnagarLoading: false, error: true };
    default:
      return state;
  }

}
// khammam
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
// mahabubnagar
function mahabubnagarReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAHABUBNAGAR:
      return { ...state, mahabubnagarLoading: false };
    case GET_MAHABUBNAGAR_SUCCESS:
      return { ...state, mahabubnagarData: action.payload, mahabubnagarLoading: true };
    case GET_MAHABUBNAGAR_ERROR:
      return { ...state, mahabubnagarLoading: false, error: true };
    default:
      return state;
  }
}
// Medak
function medakReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEDAK:
      return { ...state, medakLoading: false };
    case GET_MEDAK_SUCCESS:
      return { ...state, medakData: action.payload, medakLoading: true };
    case GET_MEDAK_ERROR:
      return { ...state, medakLoading: false, error: true };
    default:
      return state;
  }
}
// nalgonda
function nalgondareducer(state = initialState, action) {
  switch (action.type) {
    case GET_NALGONDA:
      return { ...state, nalgondaLoading: false };
    case GET_NALGONDA_SUCCESS:
      return { ...state, nalgondaData: action.payload, nalgondaLoading: true };
    case GET_NALGONDA_ERROR:
      return { ...state, nalgondaLoading: false, error: true };
    default:
      return state;
  }
}
// nizamabad
function nizamabadReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NIZAMABAD:
      return { ...state, nizamabadLoading: false };
    case GET_NIZAMABAD_SUCCESS:
      return { ...state, nizamabadData: action.payload, nizamabadLoading: true };
    case GET_NIZAMABAD_ERROR:
      return { ...state, nizamabadLoading: false, error: true };
    default:
      return state;
  }
}
// rangareddy
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
// warangal
function warangalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WARANGAL:
      return { ...state, warangalLoading: false };
    case GET_WARANGAL_SUCCESS:
      return { ...state, warangalData: action.payload, warangalLoading: true };
    case GET_WARANGAL_ERROR:
      return { ...state, warangalLoading: false, error: true };
    default:
      return state;
  }
}

export default (adilabadReducer, karimnagarReducer, khammamReducer, mahabubnagarReducer, medakReducer,
  nalgondareducer, nizamabadReducer, rangareddyReducer, warangalReducer);
