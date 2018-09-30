import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import { getLoginReducer } from './LoginReducer';
export const reducers = combineReducers({
  routing: routerReducer,
  userData: getLoginReducer
});