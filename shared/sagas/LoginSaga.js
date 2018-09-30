import { takeLatest, put, call } from 'redux-saga/effects';
import { 
    GET_LOGIN
} from '../constants';

import {
  getLoginSuccess,
  getLoginError
} from '../actions/LoginActions';

import { getLoginService } from '../api';

export function* getLogin(inputData) {
  try {
    const data = yield call(getLoginService, inputData.data);
    yield put(getLoginSuccess(data));
    sessionStorage.setItem('isAuthentic', true);
  } catch (error) {
    yield put(getLoginError(error));
    sessionStorage.setItem('isAuthentic', false);
  }
}
export function* getLoginSaga() {
  yield takeLatest(GET_LOGIN, getLogin);
}
