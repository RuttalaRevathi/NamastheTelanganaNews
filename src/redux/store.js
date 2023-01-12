/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import sliderReducer from '../redux/reducers/sliderReducer';
import latestNewsReducer from '../redux/reducers/latestNewsReducer';
import hyderabadReducer from '../redux/reducers/hyderabadReducer';
import cinemaReducer from '../redux/reducers/cinemaReducer';
import rasiPhalauReducer from '../redux/reducers/rasiPhalauReducer';
import cartoonReducer from '../redux/reducers/cartoonReducer';
import healthReducer from '../redux/reducers/healthReducer';
import telanganaReducer from '../redux/reducers/telanganaReducer';
import apReducer from '../redux/reducers/apReducer';
import nationalReducer from '../redux/reducers/nationalReducer';
import interNationalReducer from '../redux/reducers/interNationalReducer';
import sportsReducer from '../redux/reducers/sportsReducer';
import businessReducer from '../redux/reducers/businessReducer';
import nriReducer from '../redux/reducers/nriReducer';
import relatedReducer from '../redux/reducers/relatedReducer';
import photosGalleryReducer from '../redux/reducers/photosGalleryReducer';
import editPageReducer from '../redux/reducers/editPageReducer';
import zindagiReducer from '../redux/reducers/zindagiReducer';
import bathukammaReducer from '../redux/reducers/bathukammaReducer';
import agricultureReducer from '../redux/reducers/agricultureReducer';
import cookingReducer from '../redux/reducers/cookingReducer';
import vaasthuReducer from '../redux/reducers/vaasthuReducer';
import videoReducer from '../redux/reducers/videoReducer';
import adilabadReducer from '../redux/reducers/adilabadReducer';
import karimnagarReducer from '../redux/reducers/districtsReducer';
import khammamReducer from '../redux/reducers/districtsReducer';
import mahabubnagarReducer from '../redux/reducers/districtsReducer';
import medakReducer from '../redux/reducers/districtsReducer';
import nalgondaReducer from '../redux/reducers/districtsReducer';
import nizamabadReducer from '../redux/reducers/districtsReducer';
import rangareddyReducer from '../redux/reducers/districtsReducer';
import warangalReducer from '../redux/reducers/districtsReducer';

const rootReducer = combineReducers({sliderReducer,latestNewsReducer,hyderabadReducer,
cinemaReducer,rasiPhalauReducer,cartoonReducer,healthReducer,telanganaReducer,apReducer,
nationalReducer,interNationalReducer,sportsReducer,businessReducer,nriReducer,relatedReducer,
photosGalleryReducer,editPageReducer,zindagiReducer,bathukammaReducer,agricultureReducer,
cookingReducer,vaasthuReducer,videoReducer,adilabadReducer,karimnagarReducer,khammamReducer,
mahabubnagarReducer,medakReducer,nalgondaReducer,nizamabadReducer,rangareddyReducer,warangalReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
