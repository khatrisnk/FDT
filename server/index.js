import "@babel/polyfill";
import express from "express";
import cors from 'cors';
import { renderToString } from "react-dom/server"
import React from 'react';
import { StaticRouter } from 'react-router-dom'

import { App } from '../shared/App';
import { markup } from './serverMarkup';
import { Provider } from 'react-redux';
import configureStore from './store';
import saga from '../shared/sagas';


const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res) => {
    const store = configureStore({});
    const context = {};
    const markupContent = renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <App />
            </StaticRouter>
        </Provider>
    );
    store.runSaga(saga).done.then(() => {
        res.send(markup(markupContent));
    });
    store.close();
});
  
app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
});