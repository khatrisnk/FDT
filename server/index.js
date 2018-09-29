// import "babel-polyfill";
import express from "express";
import cors from 'cors';
import { renderToString } from "react-dom/server"
import React from 'react';

import { App } from '../shared/App';
import { markup } from './serverMarkup';


const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res) => {
    const markupContent = renderToString(<App />);
    res.send(markup(markupContent));
});
  
app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
});