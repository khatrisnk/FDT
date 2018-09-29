import { combineReducers } from "redux";
import { getLoginReducer } from './LoginReducer';
export const reducers = combineReducers({
  userData: getLoginReducer
});