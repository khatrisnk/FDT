import { createStore } from 'redux';
import { reducers } from './reducers';

export default createStore(
    reducers, 
    global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
);