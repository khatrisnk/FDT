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
    sessionStorage.setItem('isAuthentic', true);
    yield put(getLoginSuccess(data));
  } catch (error) {
    sessionStorage.setItem('isAuthentic', false);
    yield put(getLoginError(error));
  }
}
export function* getLoginSaga() {
  yield takeLatest(GET_LOGIN, getLogin);
}
