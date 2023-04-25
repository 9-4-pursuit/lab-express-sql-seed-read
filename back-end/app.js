const express = require("express");
const app = express();
const cors = require("cors")
const songController = require('./controllers/songController.js')

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// /song is the base url endpoint for the routes
// middleware
app.use("/song", songController);


app.get("/", (_, res) => {
  res.send("Welcome to the Songs App PART UN 🥐");
})

// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "oopsie! Try Again" });
})

module.exports = app;