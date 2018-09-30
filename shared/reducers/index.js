import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import { getLoginReducer } from './LoginReducer';
import { getProjectsReducer, getProjectByIdReducer } from './ProjectsReducer';
export const reducers = combineReducers({
  routing: routerReducer,
  userData: getLoginReducer,
  projects: getProjectsReducer,
  project: getProjectByIdReducer
});