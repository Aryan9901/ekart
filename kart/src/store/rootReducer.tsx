import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from '@modules/home/api/slice';
import categoryReducer from '@modules/categories/api/slice';

export default combineReducers({
  home: homeReducer,
  categories: categoryReducer,
});
