//DEPENDECIES

const express = require("express");
const cors = require("cors");
const songsController = require("./controllers/songController");

//config
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

//routes

app.get("/", (req, res) => {
  res.status(200).send("Welcome to turner");
});

app.get("*", (req, res) => {
  res.status(404).send("PAGE NOT FOUND ");
});
module.exports = app;
