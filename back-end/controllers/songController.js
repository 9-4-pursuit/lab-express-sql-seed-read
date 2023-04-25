const express = require("express");
const songs = express.Router();

songs.get("/", (req, res) => {
  res.status(200).send("Songs")
})

songs.get("/:id", (req, res) => {
  res.status(200).send("One Song")
})

module.exports = songs;