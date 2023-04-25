//dependencies
const express = require('express');
const cors = require('cors');
const app = express();

//configurations
app.use(express.json());
app.use(cors());

//controllers
const songController = require('./controllers/songController.js');

//routes
app.use('/songs', songController);

app.get('/', (req, res) => {
  res.status(202).send("Welcome to Tuner");
})

app.get('*', (req, res) => {
  res.status(404).send("Page Not Found!");
})


module.exports = app;