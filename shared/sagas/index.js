import { all, fork } from 'redux-saga/effects';
import { getLoginSaga } from './LoginSaga';
import { getProjectsSaga, getProjectByIdSaga } from './ProjectsSaga'

export default function* rootSaga() {
    yield all([
        fork(getLoginSaga),
        fork(getProjectsSaga),
        fork(getProjectByIdSaga)
    ]);
}
