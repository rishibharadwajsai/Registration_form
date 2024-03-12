const express = require("express");
const app = express();
const path = require('path');
const hbs = require("hbs");
const port = 3000;
require("./db/conn");


const static_path = path.join(__dirname, '../public');
const templates_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');


app.get("/", (req, res) => {
    res.sendFile('public/index.html');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});