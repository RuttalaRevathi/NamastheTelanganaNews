/* eslint-disable prettier/prettier */


import { Adilabad, BaseUrl, CategoryUrl, Karimnagar, Khammam, Mahabubnagar, Medak, Nalgonda,
   Nizamabad, Rangareddy, Warangal} from '../../utilities/urls';

export const GET_ADILABAD_SUCCESS = 'GET_ADILABAD_SUCCESS';
export const GET_ADILABAD_ERROR = 'GET_ADILABAD_ERROR';
export const GET_ADILABAD = 'GET_ADILABAD';

export const GET_KARIMNAGAR_SUCCESS = 'GET_KARIMNAGAR_SUCCESS';
export const GET_KARIMNAGAR_ERROR = 'GET_KARIMNAGAR_ERROR';
export const GET_KARIMNAGAR = 'GET_KARIMNAGAR';

export const GET_KHAMMAM = 'GET_KHAMMAM';
export const GET_KHAMMAM_SUCCESS = 'GET_KHAMMAM_SUCCESS';
export const GET_KHAMMAM_ERROR = 'GET_KHAMMAM_ERROR';

export const GET_MAHABUBNAGAR = 'GET_MAHABUBNAGAR';
export const GET_MAHABUBNAGAR_SUCCESS = 'GET_MAHABUBNAGAR_SUCCESS';
export const GET_MAHABUBNAGAR_ERROR = 'GET_MAHABUBNAGAR_ERROR';

export const GET_MEDAK = 'GET_MEDAK';
export const GET_MEDAK_SUCCESS = 'GET_MEDAK_SUCCESS';
export const GET_MEDAK_ERROR = 'GET_MEDAK_ERROR';

export const GET_NALGONDA = 'GET_NALGONDA';
export const GET_NALGONDA_SUCCESS = 'GET_NALGONDA_SUCCESS';
export const GET_NALGONDA_ERROR = 'GET_NALGONDA_ERROR';

export const GET_NIZAMABAD = 'GET_NIZAMABAD';
export const GET_NIZAMABAD_SUCCESS = 'GET_NIZAMABAD_SUCCESS';
export const GET_NIZAMABAD_ERROR = 'GET_NIZAMABAD_ERROR';

export const GET_RANGAREDDY = 'GET_RANGAREDDY';
export const GET_RANGAREDDY_SUCCESS = 'GET_RANGAREDDY_SUCCESS';
export const GET_RANGAREDDY_ERROR = 'GET_RANGAREDDY_ERROR';

export const GET_WARANGAL = 'GET_WARANGAL';
export const GET_WARANGAL_SUCCESS = 'GET_WARANGAL_SUCCESS';
export const GET_WARANGAL_ERROR = 'GET_WARANGAL_ERROR';

// warangal
export const getWarangalAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_WARANGAL,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Warangal, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_WARANGAL_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_WARANGAL_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

// Rangareddy
export const getRangareddyAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_RANGAREDDY,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Rangareddy, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_RANGAREDDY_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_RANGAREDDY_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
// nizamabad
export const getNizamabadAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_NIZAMABAD,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Nizamabad, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_NIZAMABAD_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_NIZAMABAD_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
// nalgonda
export const getNalgondaAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_NALGONDA,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Nalgonda, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_NALGONDA_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_NALGONDA_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
// Medak
export const getMedakAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_MEDAK,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Medak, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_MEDAK_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_MEDAK_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
// mahabubnagar
export const getMahabubnagarAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_MAHABUBNAGAR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Mahabubnagar, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_MAHABUBNAGAR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_MAHABUBNAGAR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
// adilabad
export const getAdilabadData = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_ADILABAD,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Adilabad, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ADILABAD_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_ADILABAD_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
// karimnagar
export const getKarimnagarData = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_KARIMNAGAR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Karimnagar, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_KARIMNAGAR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_KARIMNAGAR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

// Khammam

export const getKhammamAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_KHAMMAM,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Khammam, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_KHAMMAM_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_KHAMMAM_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};