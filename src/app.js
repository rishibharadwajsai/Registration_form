const express = require("express");
const app = express();
const path = require('path');
const port = 3000;
require("./db/conn");

const static_path = path.join(__dirname, '../public');

app.use(express.static(static_path));

app.get("/", (req, res) => {
    const html_path = path.join(static_path, 'index.html');
    res.sendFile(html_path);
});

app.post("/" ,async(req,res) => {
    try {
        
    } catch (error) {
        
    }
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});