//DEPENDECIES

const express = require("express");
const app = express();
const cors = require("cors");
const songController = require("./controllers/songController");

//config -

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/songs", songController);

//routes

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(400).send("PAGE NOT FOUND ");
});
module.exports = app;
