import "@babel/polyfill";
import '../shared/main.scss';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../shared/App';
import { Provider } from 'react-redux';
import store from './store';


/**
 * Todo : Remove Content mismatch error
 * 
 * Currently leaving it as it is as.
 * As it is not ask of the test
 */
hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);