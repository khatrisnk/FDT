import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';

import { reducers } from '../shared/reducers';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(routerMiddleware(createMemoryHistory()));
middlewares.push(sagaMiddleware);

export default (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares)),
    );
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
};