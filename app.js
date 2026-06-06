const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("version 2 for life");
});

app.listen(3000, () => {
    console.log("Server running");
});