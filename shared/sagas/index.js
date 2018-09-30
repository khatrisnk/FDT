import { all, fork } from 'redux-saga/effects';
import { getLoginSaga } from './LoginSaga';

export default function* rootSaga() {
    yield all([fork(getLoginSaga)]);
}
