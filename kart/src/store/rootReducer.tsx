import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from '@modules/home/api/slice';

export default combineReducers({
  home: homeReducer,
});
