const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Tuner Playlist App!");
})

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})
  
module.exports = app;