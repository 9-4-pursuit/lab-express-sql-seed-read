// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const songController = require("./controllers/songController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner Playlist App");
});

// Routes - songs
app.use("/songs", songController);

// 404 
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;