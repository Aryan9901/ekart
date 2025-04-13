import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from '@modules/home/api/slice';
import categoryReducer from '@modules/categories/api/slice';
import cartReducer from '@modules/cart/api/slice';
import accountReducer from '@modules/account/api/slice';

export default combineReducers({
  home: homeReducer,
  categories: categoryReducer,
  cart: cartReducer,
  account: accountReducer,
});
