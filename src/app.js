const express = require("express");
const app = express();
const path = require('path');
const port = 3000;
require("./db/conn");

const static_path = path.join(__dirname, '../public');

app.get("/", (req, res) => {
    res.sendFile('public/index.html');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});