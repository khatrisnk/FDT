import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from '../shared/reducers';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import saga from '../shared/sagas';

const initialState = window.__INITIAL_DATA__;
delete window.__INITIAL_DATA__;

const middlewares = [];

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);


const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState, 
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(saga);

export default store;