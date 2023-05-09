//dependencies
const express = require('express');
const cors = require('cors');
const app = express();

//configurations
app.use(express.json());
app.use(cors());

//controllers
const albumController = require('./controllers/albumController.js');
const songController = require('./controllers/songController.js');

//routes
app.use('/albums', albumController);
app.use('/songs', songController);

app.get('/', (req, res) => {
  res.status(202).send("Welcome to Tuner");
})

app.get('*', (req, res) => {
  res.status(404).send("Page Not Found!");
})


module.exports = app;