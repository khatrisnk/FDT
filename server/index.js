// import "babel-polyfill";
import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ''</script>
        </head>

        <body>
        <div id="app">Hello world!!!</div>
        </body>
    </html>
    `);
});
  
app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
});