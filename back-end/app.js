const express = require('express');
// const logs = require('./controllers/logsController');
const app = express();
const songController = require('./controllers/songController')

app.use(express.json()) // parse incoming data

// app.use("/songs", songController)

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
})

app.get('*', (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
