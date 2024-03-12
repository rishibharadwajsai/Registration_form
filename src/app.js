const express = require("express");
const app = express();
const path = require('path');
const port = 8000;
require("./db/conn");

const Register = require('./models/users');

const static_path = path.join(__dirname, '../public');

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req, res) => {
    const html_path = path.join(static_path, 'index.html');
    res.sendFile(html_path);
});

app.post("/", async (req, res) => {
    try {
        if (req.body.submitBtn === 'Submit') {
            console.log(req.body.email);

            res.redirect(html_path);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});