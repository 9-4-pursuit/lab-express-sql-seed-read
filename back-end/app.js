const express = require("express");
const app = express();
const cors = require("cors");
const songController = require("./controllers/songController");

app.use(cors());
app.use(express.json());


app.use('/songs', songController);

// Default endpoint
app.get('/', (req, res) => {
    res.send('Welcome to Tuner');
  });

  app.get('*', (req,res) => {
    res.status(404).send("Does not work right now :(");
  });

module.exports = app;