import { takeLatest, put, call } from 'redux-saga/effects';
import { 
    GET_PROJECTS,
    GET_PROJECT_BYID
} from '../constants';

import {
  getLoginSuccess,
  getLoginError
} from '../actions/LoginActions';

import {
    getProjectsSuccess,
    getProjectsError,
    getProjectByIdSuccess,
    getProjectByIdError
} from '../actions/ProjectsAction';

import { 
    getProjectsService,
    getProjectByIdService
} from '../api';

export function* getProjects(inputData) {
  try {
    const data = yield call(getProjectsService, inputData.data);
    yield put(getProjectsSuccess(data));
  } catch (error) {
    yield put(getProjectsError(error));
  }
}
export function* getProjectsSaga() {
  yield takeLatest(GET_PROJECTS, getProjects);
}

export function* getProjectById(inputData) {
    try {
      const data = yield call(getProjectByIdService, inputData.data);
      yield put(getProjectByIdSuccess(data));
    } catch (error) {
      yield put(getProjectByIdError(error));
    }
  }
  export function* getProjectByIdSaga() {
    yield takeLatest(GET_PROJECT_BYID, getProjectById);
  }
